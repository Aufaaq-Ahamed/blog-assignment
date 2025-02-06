import { Link, useNavigate } from "react-router-dom";

export function Blog({ blogs, setBlogs }) {
    const navigate = useNavigate();

    function deleteBlog(id) {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }

    function addViews(id) {
        const updatedBlogs = blogs.map(blog => blog.id === id ? { ...blog, views: blog.views + 1 } : blog);
        setBlogs(updatedBlogs);
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }

    return (
        <div className="min-h-screen flex font-mono flex-wrap justify-center m-6 px-6 py-12 gap-8">
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white w-80 h-90 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Link onClick={() => addViews(blog.id)} to={`/content/${blog.id}`}>
                        <img src={blog.image} alt="Blog" className="w-full h-56 object-cover rounded-t-lg" />
                    </Link>
                    <div className="p-4">
                        <div className="font-semibold text-2xl text-gray-800 truncate">{blog.title}</div>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => deleteBlog(blog.id)}
                                className="px-4 py-2 text-white bg-red-600 rounded-full text-lg hover:bg-red-700 transition duration-300">
                                Delete
                            </button>
                            <Link to={`/create?edit=${blog.id}`}>
                                <button className="px-4 py-2 text-white bg-green-600 rounded-full text-lg hover:bg-green-700 transition duration-300">
                                    Edit
                                </button>
                            </Link>
                            <p className="text-gray-600 font-medium text-xl">👁️{blog.views}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}