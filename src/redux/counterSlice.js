// Import createSlice from Redux Toolkit to create a slice of state
import { createSlice } from '@reduxjs/toolkit'

// Declare/Define the initial state for this slice - count starts at 0
const initialState = {
  count: 0,
  name: "Jack"
}

// createSlice auto-generates action creators and action types for each reducer
export const counterSlice = createSlice({
  // name is used as a prefix for generated action types e.g. "counter/increment"
  //this identify the slice
  name: 'counter',
  // pass in the initialState we defined above as a const
  initialState,
  // reducers define how the state can be changed
  //Object that contains the functions that would change our state

  reducers: {
    // increment action - adds 1 to count
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    // decrement action - subtracts 1 from count
    decrement: (state) => {
      state.count -= 1
    },
    // incrementByAmount action - takes a payload and adds it to count
    // action.payload is the value passed in when the action is dispatched
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
// Destructure and export each action so components can dispatch them
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the reducer so it can be added to the store
export default counterSlice.reducer