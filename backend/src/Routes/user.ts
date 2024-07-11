import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
 
export const userRout = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();



userRout.post('/signup', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body=await c.req.json();
    const userAlready=await prisma.user.findFirst({
      where:{
        email:body.email,
      }
    })
    if(userAlready){
      alert("user Already exist")
      return c.json({msg:"user already exist"});
    }
    const user = await prisma.user.create({
    data: {
      name:body.name,
      email: body.email,
      password: body.password
    },
  });
  console.log(user);
  const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  
  return c.json({
    jwt: token
  })
  });


  
userRout.post('/signin', async (c) => {
  const prisma = new PrismaClient({
  //@ts-ignore
      datasourceUrl: c.env?.DATABASE_URL	,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findFirst({
      where: {
          email: body.email,
  password: body.password
      }
  });

  if (!user) {
      c.status(403);
      alert("user not found" );
      return c.json({ error: "user not found" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
})