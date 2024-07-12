import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../hooks";
import { formattedDate } from "../components/Date";
import { Skeleton } from "../components/skeleton";
export const Blogs = () => {

    const { loading, blogs } = useBlogs();
    const blogsLength = blogs.length;

    if (loading || blogsLength == 0) {
        return<Skeleton></Skeleton>
    }

    return (
        <div >
            <AppBar name="Ram"></AppBar>
            <div>
                {blogs.map((blog) =>
                    <BlogCard
                        id={blog.id}
                        authorName={blog.author.name}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={formattedDate}
                    ></BlogCard>
                )}
            </div>
        </div>
    );
};
