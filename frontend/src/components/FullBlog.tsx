
interface FullBlogtype{
    title:string;
    publishedDate:string;
    content:string;
    authorName:string;
}
// {title,publishedDate,content,authorName}:FullBlogtype
export const FullBlog=()=>{

    return(
         <div>
            <div>
                <div>
                   <div>{"title"}</div>
                   <div>{"publishedDate"}
                    <div>{"content"}</div>
                   </div>
                </div>
                <div>{"authorName"}</div>
            </div>
         </div>
    )
}