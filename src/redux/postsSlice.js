// ============================================================
// IMPORTS
// ============================================================

// createApi - the main function that creates our API service
// it auto generates hooks, manages caching, loading and error states for us
// fetchBaseQuery - a built in fetch function provided by RTK Query
// it is a wrapper around the native fetch API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ============================================================
// CREATE API SERVICE
// ============================================================

// createApi sets up the entire API connection in one place
// it generates hooks automatically based on the endpoints we define
export const postsApi = createApi({

    // reducerPath - a unique name/key for this API in the Redux store
    // this is how Redux identifies and stores the API cache internally
    // think of it as the name tag for this API service in the store
    reducerPath: "postsApi",

    // baseQuery - tells RTK Query HOW to fetch data
    // fetchBaseQuery is the built in fetcher that uses the native fetch API
    // baseUrl - the base address of the API
    // every endpoint query will be added onto the end of this URL
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),

    // ============================================================
    // ENDPOINTS
    // ============================================================

    // endpoints - a function that defines all the things we can fetch
    // it receives "builder" as an argument which is an object provided by RTK Query
    // builder is a helper object that gives us methods to define our endpoints
    // builder.query  = used to define GET requests (reading/fetching data)
    // builder.mutation = used to define POST/PUT/DELETE requests (changing data)
    endpoints: (builder) =>({

        // getAllPosts - endpoint to fetch every post from the API
        // builder.query sets this up as a GET request
        // query: () => "posts" means hit the URL .../posts with no arguments needed
        // this generates the hook: useGetAllPostsQuery
        getAllPosts: builder.query({
            query: () => "posts",
        }),

        // getPostById - endpoint to fetch one specific post by its id
        // builder.query sets this up as a GET request
        // query: (id) => accepts an id argument passed in when the hook is called
        // `posts/${id}` builds the URL dynamically e.g. .../posts/5
        // this generates the hook: useGetPostByIdQuery
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
        })
    }),
})

// ============================================================
// EXPORT HOOKS
// ============================================================

// RTK Query automatically generates a hook for every endpoint we defined above
// useGetAllPostsQuery  - hook for the getAllPosts endpoint
// useGetPostByIdQuery  - hook for the getPostById endpoint
// we export these so any component can import and use them to fetch data
export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi