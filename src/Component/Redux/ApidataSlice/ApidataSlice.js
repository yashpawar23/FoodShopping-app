// import { createSlice } from "@reduxjs/toolkit";

// const ApidataSlice = createSlice({
//     name : "Apidata",
//     initialState :{
//         data :[],
//         loading : false,
//         error :null
//     },
//     reducers:{
//         fetchDataRequest: state => {
//             state.loading = true;
//             state.error = null;
//           },
//           fetchDataSuccess: (state, action) => {
//             state.loading = false;
//             state.data = action.payload;
//           },
//           fetchDataError: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//           },
//     }
// })

// export const  {getDataRequest,getDataSucess,getDataError} = ApidataSlice.actions
// export default ApidataSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataError } = postsSlice.actions;
export default postsSlice.reducer;