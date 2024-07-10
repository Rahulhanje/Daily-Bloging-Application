import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
export const Signin=()=>{

   return(
    <div className="grid-clos-1 lg:grid grid-cols-2 ">
        <div >
         <Auth type="Signin"></Auth>
        </div>
        <div className="invisible lg:visible">
        <Quote/>
        </div>
    </div>
   )
}