export default function BlogGrid() {
    const blogs = [
        { id: 1, title: "First Blog", description: "This is the first blog post.", image: "https://images.pexels.com/photos/31310883/pexels-photo-31310883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, title: "Second Blog", description: "This is the second blog post.", image: "https://images.pexels.com/photos/29506601/pexels-photo-29506601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, title: "Third Blog", description: "This is the third blog post.", image: "https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        // { id: 4, title: "Fourth Blog", description: "This is the fourth blog post.", image: "https://images.pexels.com/photos/356660/pexels-photo-356660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {blogs.map(blog => (
                <div key={blog.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">{blog.title}</h2>
                        <p className="text-gray-600 mt-2">{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
