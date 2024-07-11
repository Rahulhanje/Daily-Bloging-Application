import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../hooks";
export const Blogs= () => {
      
const { loading, blogs } = useBlogs();
   const blogsLength = blogs.length; 
   
   if (loading ||blogsLength==0) {
        return (
            
            <div>Loading...</div>
        )
    }

    return (
        <div >
            <AppBar name="Ram"></AppBar>
            <div>
            {blogs.map((blog)=>
                <BlogCard
                    id={blog.id}
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="Dec 3 2024"
                ></BlogCard>
           )}
            </div>
        </div>
    );
};
