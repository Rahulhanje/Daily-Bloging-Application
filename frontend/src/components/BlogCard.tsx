import { Link } from "react-router-dom";
interface BlogCardprops {
    id:string
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardprops) => {
    return (
        <Link to={`/blog/${id}`}>
        <div className="flex justify-center pt-5">
        <div className="flex w-full sm:w-[32rem] md:w-[38rem] lg:w-[42rem] p-4 border-b-2 shadow-md shadow-slate-200  cursor-pointer">
            <div>
                <div>
                    <div className="flex items-center">
                        <div>
                            <Avatar></Avatar>
                        </div>
                        <div className="flex font-light items-center">
                            <div className="pl-3 font-medium text-sm">{authorName}</div>
                            <div className="pl-2 text-slate-900 font-semibold text-xs">{publishedDate}</div>
                        </div>
                    </div>
                </div>
                <div className="font-black text-2xl py-3 text-slate-800 font-sans">{title}</div>
                <div className="font-serif font-light text-slate-700 pb-8">{`${content.slice(0, 200)} ...`}</div>
                <div className="text-slate-600 text-sm">{`${Math.ceil(content.length / 200)} min Read`}</div>
            </div>
        </div>
    </div>
    </Link>
    );
};

export function Avatar() {
    return (
        // <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-slate-300 rounded-full dark:bg-gray-600">
        //     <span className="font-medium text-black-600 dark:text-gray-300">
        //         {name[0]}
        //     </span>
        // </div>
        <div className="relative inline-flex flex-col justify-center">
        <div className="relative inline-flex w-10 h-10 flex-col  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
    </div>
    </div>
    );
}

