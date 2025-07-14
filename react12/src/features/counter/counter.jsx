import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  //slice name is  counter
  name: 'counter',
  initialState:{
    value:0 // initial state of the counter
  },
  
  // reduces reduces takes an initial state and an action and returns a new state

   reducers: {
    // increment action
    increment: (state) => {
      state.value += 1
    },
    //decrement action
    decrement: (state) => {
      state.value -= 1
    },
    // reset the amount to 0
    reset: (state)=>{
      state.value = 0
    },

    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    }

  },
})

export const { increment, decrement, reset,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer