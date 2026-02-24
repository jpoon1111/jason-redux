// ============================================================
// IMPORTS
// ============================================================

// configureStore - the main function from Redux Toolkit that creates the Redux store
// the store is the single central place that holds ALL state in the app
import { configureStore } from '@reduxjs/toolkit'

// counterReducer - the reducer exported from counterSlice
// it handles all state changes related to the counter (increment, decrement etc)
import counterReducer from './counterSlice'

// postsApi - the API service we created with createApi in postsSlice
// we need it here to register its reducer and middleware into the store
import { postsApi } from './postsSlice'

// ============================================================
// CREATE THE STORE
// ============================================================

// configureStore creates the Redux store and combines all our reducers
// every slice and API service must be registered here to work
export const store = configureStore({

  // ============================================================
  // REDUCER
  // ============================================================
  // reducer is an object that combines all reducers into one store
  // each key becomes the name used to access that slice in the store
  // e.g. state.counter, state.postsApi
  reducer: {

    // counter - registers the counterSlice reducer under the key "counter"
    // this means we access counter state via state.counter.count
    counter: counterReducer,

    // postsApi.reducerPath - the key is "postsApi" (set in postsSlice.js)
    // postsApi.reducer - the auto generated reducer from createApi
    // RTK Query uses this to store all cached API data in the Redux store
    [postsApi.reducerPath]: postsApi.reducer
  },

  // ============================================================
  // MIDDLEWARE
  // ============================================================
  // middleware are functions that sit between dispatch and the reducer
  // they run every time an action is dispatched
  // getDefaultMiddleware() returns Redux Toolkit's default middleware
  // .concat(postsApi.middleware) adds RTK Query's middleware on top
  // postsApi.middleware is required for RTK Query features like
  // caching, invalidation, polling and auto re-fetching to work correctly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})