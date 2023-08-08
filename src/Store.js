import { configureStore, createSlice } from "@reduxjs/toolkit";

let counter = createSlice({
  name: 'counter',
  initialState : 1
})
let cart = createSlice({
  name : "cart",
  initialState : [
    {id : 0, product : '상품1', price : '5000' },
    {id : 0, product : '상품2', price : '15000' },
    {id : 0, product : '상품3', price : '35000' }
  ]
})

export default configureStore({
  reducer : {
    counter : counter.reducer,
    cart : cart.reducer
  }
})