import { Link } from "react-router-dom"

export function Header(){
    return (
        <div className="flex flex-wrap font-mono items-center bg-black text-white justify-between p-8 rounded shadow-lg text-5xl font-bold">
            <h1>𝕭𝖑𝖔𝖌𝖌𝖌</h1>
            <div className="flex text-2xl gap-6 cursor-pointer">
                {/* <h3>Home</h3>
                <h3>About</h3>
                <h3>Add</h3> */}
                <Link to="/">Home</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/create">Create</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}