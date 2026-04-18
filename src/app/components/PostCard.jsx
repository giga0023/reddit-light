import './PostCard.css'

export default function PostCard(props) {
    const post = props.post
    return (
        <div className="post-card">
            <p className="post-author">{post.author}</p>
            <h3 className="post-title">{post.title}</h3>
            <img src={post.url} alt="post-image" className="post-image"/>
            <div className="post-stats">
                <span className="upvotes">⬆️ {post.ups}</span>
                <span className="comments">💬 {post.num_comments}</span>
            </div>
        </div>
    )
};