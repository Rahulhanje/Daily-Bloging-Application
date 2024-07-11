import { useEffect,useState } from "react"
import axios from "axios"
import { BACKEND_URl } from "../config";

export interface Blog {
    "content": string;
    "title": string;
    "id": string; 
    "author": {
        "name": string
    }
}

  export const useBlog=({id}:{id:string}) =>{
    const [loading,setLoading]=useState(true);
    const [blog,setBlog]=useState<Blog>();
    console.log(id);
    useEffect(()=>{
         axios.get(`${BACKEND_URl}/api/v1/blog/${id}`,{
             headers:{
                  Authorization: `Bearer ${localStorage.getItem("token")}`
             }

         })
         
         .then(response=>{
 
             const { blog: fetchedBlog } = response.data;
 
             setBlog(fetchedBlog);
             console.log(fetchedBlog);
             
             setLoading(false);
         })
    },[id])
    
    return {
     loading,
     blog
    }
 }


export const useBlogs=(): { loading: boolean, blogs: Blog[] } =>{
   const [loading,setLoading]=useState(true);
   const [blogs,setBlogs]=useState([]);

   useEffect(()=>{
        axios.get(`${BACKEND_URl}/api/v1/blog/bulk`,{
            headers:{
                 Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        
        .then(response=>{

            const { blogs: fetchedBlogs } = response.data;

            setBlogs(fetchedBlogs);
            // console.log(fetchedBlogs);
            
            setLoading(false);
        })
   },[])
   
   return {
    loading,
    blogs
   }
}