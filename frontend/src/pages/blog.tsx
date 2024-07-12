import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/skeleton";

export const Blog=()=>{
    const {id}=useParams();
    console.log(id);
   const {loading,blog}=useBlog({id :id ||""});
   
   if (loading || !blog) {
        return (
            <Skeleton></Skeleton>
           
        )
    }
    
    return (
        <div >
            <div>
            <FullBlog blog={blog} ></FullBlog>
            </div>
        </div>
    );
};
