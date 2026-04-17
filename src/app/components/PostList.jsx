function PostList(props) {
    const post = props.posts
    return (
        <div>
            {post.map(p => 
                <PostCard key={p.id} post={p}/>
            )}
        </div>
    )
};