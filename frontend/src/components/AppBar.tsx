import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const AppBar = () => {
    return (
        <div className="flex border-b justify-between px-10 py-4 shadow shadow-slate-400">

            <div className="font-bold font-serif flex flex-col justify-center text-2xl ">
                <Link to={"/blogs"}>
                    Medium
                </Link>
            </div>

            <div className="flex justify-center ">
                <Link to={`/signin`}>
                    <div className="pt-2">
                        <button type="button" onClick={() => {
                            localStorage.removeItem("token");
                        }} className="mr-4 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Logout</button>
                    </div>
                </Link>
                <Link to={`/publish`}>
                    <div className="pt-2">
                        <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
                    </div>
                </Link>
                <div className="pt-2">
                    <Avatar  />
                </div>
            </div>
        </div>
    )
}

