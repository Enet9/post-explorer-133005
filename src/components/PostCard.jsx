export default function PostCard({ post }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h2>{post.title}</h2>
            <p>Post ID: {post.id}</p>
            <p>User ID: {post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
}
