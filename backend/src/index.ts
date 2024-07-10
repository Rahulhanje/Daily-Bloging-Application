import { Hono } from 'hono'
// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'
// import { sign } from 'hono/jwt'
import { blogRoute } from './Routes/blog';
import { userRout } from './Routes/user';
import { cors } from 'hono/cors'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();
app.use('/api/*', cors())
app.route("/api/v1/user",userRout);
app.route("/api/v1/blog",blogRoute);


export default app
