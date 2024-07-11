import { ChangeEvent, useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import { SignupType} from "@rahulhanje/zod-app";
import { BACKEND_URl } from "../config";
import axios from "axios";

export const Auth=({type}:{type:"Signup"|'Signin'})=>{

    const navigate=useNavigate();
    
    const [postInputs,setPostINputs]=useState<SignupType>({
        name:"",
        email:"",
        password:""
    })
async function sendRequest(){
    
    try{const response=await axios.post(`${BACKEND_URl}/api/v1/user/${type==='Signup'?"signup":"signin"}`,postInputs);
    const jwt=response.data;
    // console.log(jwt);
    // console.log(jwt.jwt)
    localStorage.setItem("token",jwt.jwt);
    navigate("/blogs");
}
    catch(e){

    }
}
   
    return(
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div >
                <div className="font-extrabold text-3xl px-10">
                    Create an account 
                </div>
                <div className="text-center text-bg-slate-400 "> 
                    {type === "Signin"? "Don't have an account":"Already have an account ?" }
                    <Link className="pl-2 underline " to={type==="Signin"? "/signup" :"/signin"}>{type==="Signin"? "Signup" :"Signin"}</Link>
                </div>
               {type==='Signup'?<InputBox type="text" label="Username " placeholder="Enter your Usrename" onChange={(e)=>{
                     setPostINputs({
                        ...postInputs,
                        name:e.target.value
                    }
                     )
                }}></InputBox>:null
            }
                <InputBox type="text" label="Email " placeholder="example@gmail.com" onChange={(e)=>{
                    setPostINputs({
                        ...postInputs,
                       
                        email:e.target.value,
                        
                    })
                }}></InputBox>
                <InputBox type={"password"} label="Password" placeholder="*****" onChange={(e)=>{setPostINputs({
                    ...postInputs,
                    password:e.target.value 
                })
                }}></InputBox>
                <div className="mt-5">
                <button type="button" onClick={sendRequest} className="shadow-md shadow-slate-500	 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="Signup" ? "Signup":"Signin"}</button>
                </div>

            </div>
</div>
        </div>   
    )
}

interface LabelInputs{
    label:string;
    placeholder:string;
    type?:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
}

function InputBox({label,placeholder,onChange,type}:LabelInputs){
    return (
      <>
      <div className="pt-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} type={type || "text" } id="first_name" className="bg-gray-50 border border-gray-400 text-gray-900 text-2sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
      </>
    );
}