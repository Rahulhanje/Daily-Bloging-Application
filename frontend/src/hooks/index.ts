import { useEffect,useState } from "react"
import axios from "axios"
import { BACKEND_URl } from "../config";

export const useBlogs=()=>{
   const [loading,setLoading]=useState(true);
   const [blogs,setblogs]=useState([]);
   
   useEffect(()=>{
        axios.get(`${BACKEND_URl}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        
        .then(Response=>{
            console.log("res"+Response.data);
            setblogs(Response.data.blogs);
            setLoading(false);
        })
   },[])

   return {
    loading,
    blogs
   }
}