import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { useParams } from "react-router-dom";

export const Blog=()=>{
    const {id}=useParams();
    console.log(id);
   const {loading,blog}=useBlog({id :id ||""});
   
   if (loading ||blog.length==0) {
        return (
            
            <div>Loading...</div>
        )
    }
    
    return (
        <div >
            <div>
            {/* title={"Demo"} publishedDate="Dec 12 2024" content={"sdfasgsdfgdsg"} authorName={"Rahul"} */}
            <FullBlog  ></FullBlog>
            </div>
        </div>
    );
};
