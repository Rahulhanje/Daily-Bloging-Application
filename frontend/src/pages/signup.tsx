import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
export const Signup=()=>{

   return(
    <div className="grid-clos-1 lg:grid grid-cols-2 ">
        <div >
         <Auth type="Signup"></Auth>
        </div>
        <div className="invisible lg:visible">
        <Quote/>
        </div>
    </div>
   )
}