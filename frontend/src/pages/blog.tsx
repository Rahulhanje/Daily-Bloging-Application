import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../hooks";
export const Blog = () => {
    const { loading, blogs } = useBlogs();
   // console.log(blogs);
    if (loading || blogs.length ==0) {
        return (
            
            <div>Loading...</div>
        )
    }
   // console.log("nothin"+blogs);
    return (
        <div >
            <AppBar name="Ram"></AppBar>
            <div>
                
                <BlogCard
                    authorName={"Ra"}
                    title="This is Exactly How I Use SQL at Work as an Analyst"
                    content="Ever wonder how DA and DS navigate the world of analytics? Imagine a product team, laser-focused on keeping customers happy during outages. From building apps to streamlining restoration services — all to minimize disruption. As their Analytics Lead, guess what my secret weapon is? (Spoiler alert: it’s not spreadsheets!)"
                    publishedDate="Dec 3 2024"
                ></BlogCard>
            {/* )}    */}
            </div>
        </div>
    );
};
