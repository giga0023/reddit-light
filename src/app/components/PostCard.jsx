export default function PostCard(props) {
    const post = props.post

    return (
        <div>
            <p className="author">{post.author}</p>
            <h3 className="title">{post.title}</h3>
            <img src={post.url} alt="post-image" />
            <div className="upvotes">{post.ups}</div>
            <div className="comments">{post.num_comments}</div>
        </div>
    )
};