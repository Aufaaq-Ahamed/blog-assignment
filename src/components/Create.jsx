import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Create({ setBlogs }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [newItem, setNewItem] = useState({ id: crypto.randomUUID(), title: "", content: "", image: null, views: 0, comments: ["hello there"]});
    const editId = searchParams.get("edit");
    useEffect(() => {
        const editId = searchParams.get("edit");
        if (editId) {
            const savedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
            const blogToEdit = savedBlogs.find(blog => blog.id === editId);
            if (blogToEdit) {
                setNewItem(blogToEdit);
            }
        }
    }, [searchParams]);

    function handleSubmit(e) {
        e.preventDefault();
        const updatedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");

        if (newItem.id === editId) {
            const updatedBlogsArray = updatedBlogs.map(blog =>
                blog.id === newItem.id ? newItem : blog
            );
            console.log("hello")
            setBlogs(updatedBlogsArray);
            localStorage.setItem("blogs", JSON.stringify(updatedBlogsArray));
        } else {
            setBlogs(prevBlogs => [...prevBlogs, newItem]);
            localStorage.setItem("blogs", JSON.stringify([...updatedBlogs, newItem]));
        }
        navigate("/blog");
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setNewItem(prev => ({ ...prev, image: reader.result }));
        };
    }

    return (
        <div id="postFormContainer" className="bg-white p-6 h-screen rounded-lg shadow-md bg-opacity-75">
            <h2 className="text-2xl font-bold mb-4">
                {searchParams.get("edit") ? "Edit Post" : "Create a New Post"}
            </h2>
            <form id="postForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    placeholder="Title"
                    className="w-full p-2 border rounded mb-4 text-3xl hover:ring-2 ring-blue-500"
                    required
                />
                <textarea
                    value={newItem.content}
                    onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                    placeholder="Content"
                    className="w-full p-2 border rounded mb-4 h-32 text-xl hover:ring-2 ring-blue-500"
                    required
                ></textarea>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded mb-4 text-3xl hover:ring-2 ring-blue-500"
                    required
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ">
                    {searchParams.get("edit") ? "Update Post" : "Save Post"}
                </button>
            </form>
        </div>
    );
}