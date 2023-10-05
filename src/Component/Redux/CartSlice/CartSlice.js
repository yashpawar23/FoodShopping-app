import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addtocart: (state, action) => {
      // state.cart.push(action.payload)
      const Itemindex = state.cart.findIndex((item) => item.id === action.payload.id)
      console.log(Itemindex)
      if (Itemindex >= 0) {
        state.cart[Itemindex].qnty += 1
      } else {
        const temp = { ...action.payload, qnty: 1 }
        state.cart.push(temp)
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((data) => data.id !== action.payload.id)
    },
    
    decreaseQuantity: (state, action) => {
      const Itemindex = state.cart.findIndex((item) => item.id === action.payload.id)
      console.log(Itemindex)
      // if(Itemindex !== -1){
        if(state.cart[Itemindex].qnty > 1){
        state.cart[Itemindex].qnty -= 1
        }else{
          state.cart.splice(Itemindex,1)
        // }
      }
      
    },
  },
})
export default cartSlice.reducer
export const { addtocart, removeFromCart,decreaseQuantity } = cartSlice.actions