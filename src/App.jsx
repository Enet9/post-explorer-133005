import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch posts.");
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div>
        <h1>Post Explorer</h1>
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
      </div>
  );
}
