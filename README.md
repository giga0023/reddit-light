# Reddit Light Clone

A lightweight Reddit clone built with **React**, **Redux Toolkit**, and **asynchronous Thunks**.

## 🎯 Objective

Learn how to manage complex state with Redux, fetch asynchronous data, and build reusable React components.

## 🚀 Implemented Features

✅ **Redux Toolkit** - Centralized state management
✅ **Async Thunks** - Asynchronous data fetching
✅ **React Hooks** - useEffect, useDispatch, useSelector
✅ **Reusable Components** - PostList and PostCard
✅ **CSS Styling** - Clean and responsive design
✅ **Mock Data** - Dummy JSON for testing

## 📦 Installation

```bash
npm install
npm start
```

## 🔧 Tech Stack

- **React** - UI library
- **Redux Toolkit** - State management
- **JavaScript ES6+** - Language
- **CSS3** - Styling

## 📝 How It Works

1. **App.jsx** dispatches `fetchPosts()` on mount
2. **postSlice.js** manages state (pending/fulfilled/rejected)
3. **PostList** maps posts and renders **PostCard**
4. **PostCard** displays title, image, author, and stats

```javascript
// Redux Flow
dispatch(fetchPosts()) 
  → pending (loading = true)
  → fulfilled (posts = data)
  → PostCard renders
```

## ⚠️ API Notes

Currently **uses mock data** (local JSON).

### To use Reddit API in production:

1. **OAuth Reddit** - Register app at https://www.reddit.com/prefs/apps
   - Requires credentials and token
   - Complex authentication setup

2. **Backend Proxy** - Node.js server with CORS
```javascript
   // server.js
   const cors = require('cors');
   const https = require('https');
```

3. **Alternative APIs** - Public Reddit APIs (with limitations)

### Why doesn't it work currently?

Reddit blocks **CORS requests from the browser** for security. Without a backend or OAuth, direct API calls are impossible.

## 📚 What I Learned

- Redux Toolkit and createAsyncThunk
- Debugging JSON and CORS errors
- Functional React components
- Complex state management
- Fetch API and error handling

## 🎓 Next Steps (with real API)

- [ ] Implement Reddit OAuth
- [ ] Add search bar for subreddits
- [ ] Display comments on click
- [ ] Dark mode toggle
- [ ] Pagination

## 🐛 Known Issues

- ❌ CORS blocks Reddit API fetches
- ⚠️ Data limited to 2 mock posts
- ⚠️ Comments not functional without API
