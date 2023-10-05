import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import cartSlice from '../CartSlice/CartSlice'
import postReducer from '../ApidataSlice/ApidataSlice'
import RootSaga from "../../Sagas/RootSaga";
import { TotalPriceSlice } from "../TotalPriceSlice/TotalPriceSlice";




const sagaMiddleware = createSagaMiddleware();

 const Store = configureStore({
    reducer:{
     cart:cartSlice,
     posts: postReducer,
     Total:TotalPriceSlice
    },
    middleware: [sagaMiddleware],
})
sagaMiddleware.run(RootSaga)
export default Store