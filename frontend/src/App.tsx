import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Blogs} from "./pages/blogs"
import { Blog } from "./pages/blog"
function App(){
  return (
    <>
       <BrowserRouter>
       <Routes>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/signin' element={<Signin/>}></Route>
         <Route path='/blogs' element={<Blogs/>}></Route>
         <Route path='/blog' element={<Blog/>}></Route>

       </Routes>
       </BrowserRouter>      
    </>
  )
}

export default App
