import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: false,
    hasError: false
};

const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async ({postId, subreddit}) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}/.json`);
        const json = await response.json();
        return json;
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload)
        },
        removeComment: (state, action) => {
            state.comments = state.comments.filter(comment =>
                comment.id !== action.payload.id
            )
        },
        updatesUpvotes: (state, action) => {
            const comment = state.comments.find(c => c.id === action.payload.id)
            if (comment) {
                comment.ups++
            }
        }
    },
    extraReducers: builder => {
        builder
          .addCase(fetchComments.pending, (state) => {
            state.isLoading = true
            state.hasError = false
          })
          .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload.data.children.map(child => child.data)
          })
          .addCase(fetchComments.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
          })
    }
});

export const { addComment, removeComment, updatesUpvotes } = commentsSlice.actions;
export { fetchComments };
export default commentsSlice.reducer;