import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Content({ blogs }) {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === id);
    const [comment, setComment] = useState("");
    const [localBlogs, setLocalBlogs] = useState(blogs);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
        if (storedBlogs) {
            setLocalBlogs(storedBlogs);
        }
    }, []);

    if (!blog) {
        return (
            <div className="content-container min-h-screen font-mono flex flex-col items-center">
                <h1 className="font-bold text-5xl p-8 font-serif">Blog not found!!</h1>
            </div>
        );
    }

    const handleComments = (e) => {
        e.preventDefault();
        const updatedBlogs = localBlogs.map((currentBlog) => {
            if (currentBlog.id === id) {
                return {
                    ...currentBlog,
                    comments: [...currentBlog.comments, comment]
                };
            } else {
                return currentBlog;
            }
        });

        setLocalBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        setComment("");
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const currentBlog = localBlogs.find((b) => b.id === id);

    return (
        <div className="content-container min-h-screen font-mono flex flex-col items-center">
            <h1 className="font-bold text-5xl p-8 font-serif">{currentBlog.title}</h1>
            <img
                src={currentBlog.image}
                alt={currentBlog.title}
                className="w-3/5 h-100 object-cover rounded-lg shadow-lg mb-8"
            />
            <p className="p-8 text-xl">{currentBlog.content}</p>

            <div className="w-3/5">
                <form onSubmit={handleComments} className="mb-8 flex">
                    <input
                        value={comment}
                        onChange={handleCommentChange}
                        type="text"
                        placeholder="Comment..."
                        className="border rounded-md w-full h-10 pl-4 mr-4"
                    />
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">Comment!</button>
                </form>

                <div>
                    <h1 className="font-bold text-2xl mb-4 ">Comments:</h1>
                    <div className="space-y-4">
                        {currentBlog.comments.map((comment, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-100 rounded-md shadow-md mb-5"
                            >
                                {comment}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}