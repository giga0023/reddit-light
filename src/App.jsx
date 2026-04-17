import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './app/features/posts/postSlice';

function App() {
  const dispatch = useDispatch();
  const { posts, isLoading, hasError } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (isLoading) return <div>Loading...</div>
  if (hasError) return <div>Error</div>

  return <PostList posts={posts} />
}

export default App;