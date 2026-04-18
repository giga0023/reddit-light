import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    hasError: false
};

const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('/fakeRedditData.json');
        const json = await response.json();
        return json;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        updatesUpvotes: (state, action) => {
            const post = state.posts.find(p => p.id === action.payload.id)
            if (post) {
               post.ups++
            } 
        }
    },
    extraReducers : builder => {
        builder
          .addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
            state.hasError = false
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload.data.children.map(child => child.data)
            state.isLoading = false
            state.hasError = false
          })
          .addCase(fetchPosts.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
          })
    }
});

export const { addPost, updatesUpvotes } = postsSlice.actions;
export { fetchPosts };
export default postsSlice.reducer;

