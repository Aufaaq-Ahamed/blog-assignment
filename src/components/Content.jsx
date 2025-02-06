import { useParams } from "react-router-dom";

export function Content({blogs}){
    const {id} = useParams();
    const blog = blogs.find((b)=>b.id===id);
    if(!blog){
        return <div>Blog not found!!</div>
    }
    return(
        <div className="content-container min-h-screen font-mono flex flex-col items-center">
            <h1 className="font-bold text-5xl p-8 font-serif" >{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="w-3/5 h-100 object-cover shadow-lg"/>
            <p className="p-8 text-xl">{blog.content}</p>
        </div>
    )
}