import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify} from 'hono/jwt'
 
export const blogRoute = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
  Variables: {
    userId: string
}
}>();


// @ts-ignore
blogRoute.use(async (c, next) => {
    const jwt=c.req.header("Authorization");
    if(!jwt){
        return c.json({
            msg:"user Unauthorized"
        });
    } 
    const token=jwt.split(" ")[1];
    if (!token) {
        return c.json({ msg: "User Unauthorized" });
      }
    try{const payload=await verify(token,c.env.JWT_SECRET);
    if(!payload){
        c.status(401);
        return -c.json({
            msg:"Unauthorized"
        });
    }
    //@ts-ignore
    c.set("userId",payload.id);
    await next();
}catch(e){
    return c.json({msg:"Error "});
}

});

blogRoute.post("/",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body=await c.req.json();
    const userId=c.get('userId');
    const data=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId,
        }
    })
    if(!data){
        c.status(401);
        return c.json({msg:"Post not added"});
    }
    c.status(200);
    return c.json({
        data
    })
    
})


blogRoute.put("/",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body=await c.req.json();
    const userId=c.get('userId');
    const data=await prisma.post.update({
        where:{
          id:body.id,
          authorId:userId
        } ,
        data:{
            title:body.title,
            content:body.content
        }
    })
    if(!data){
        c.status(401);
        return c.json({msg:"Post not added"});
    }
    c.status(200);
    return c.json({
        data
    })
    
})

blogRoute.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return c.json({
        blogs
    })
});

blogRoute.get('/:id', async (c) => {
	const id = c.req.param('id');
    console.log(id);
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})
  
blogRoute.delete("/delete-all-data", async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    try {
      await prisma.post.deleteMany({});
     
      return c.json({ msg: "All data deleted successfully" });
    } catch (error) {
      console.error("Error deleting data:", error);
      return c.json({ msg: "Internal Server Error"});
    }
  });