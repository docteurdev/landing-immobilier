import { createSlice } from "@reduxjs/toolkit";

export const productSlice= createSlice({
    name:'productSlice',
    initialState:{
        productSelected:{},
        cart:[]
    },
    reducers:{
        selectProduct(state, {payload}){
            state.productSelected= payload
    }}
})

export const {selectProduct}= productSlice.actions;