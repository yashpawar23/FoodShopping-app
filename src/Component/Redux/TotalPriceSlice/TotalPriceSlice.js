import { createSlice } from "@reduxjs/toolkit";

export const TotalPriceSlice = createSlice({
  name : "TotalPrice",
  initialState : {
    
    total_price : []
   
  },
  reducers :{
     AllCartItemTotal : (state,action)=>{
      state.cart.push(action.payload)
     }
  }
})
export default TotalPriceSlice.reducer
export const {AllCartItemTotal } = TotalPriceSlice.actions