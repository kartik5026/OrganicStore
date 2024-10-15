import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productName: [],
    price: [],
    imageUrl: [],
    qty:[],
    count: 0,
    totalPrice: 0
}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productName.push(action.payload.name);
            state.price.push(action.payload.price);
            state.imageUrl.push(action.payload.url);
            state.qty.push(1);
        },
        removeFromCart: (state, action) => {

            state.productName.splice(action.payload, 1)
            state.price.splice(action.payload, 1)
            state.imageUrl.splice(action.payload, 1)
        },
        updateCartCount: (state) => {
            let totalCount  = 0 ;
            state.qty.map((itemCount)=>{
                totalCount+=itemCount;
            })
            state.count = totalCount;
        },
        updateTotalPrice: (state) => {
            let total = 0;
            state.price.map((val,index) => {
                total += val*state.qty[index];
            })
            state.totalPrice=total;
        },
        emptyCart: (state) => {
            state.productName.length = 0;
            state.price.length = 0;
            state.imageUrl.length = 0;
        },
        incQty:(state,action)=>{
            const currentQty = state.qty[action.payload];
            state.qty[action.payload] = currentQty+1;
        },
        decQty:(state,action)=>{
            const currentQty = state.qty[action.payload];
            if(currentQty>0){
                state.qty[action.payload] = currentQty-1;
            }
            else{
                state.qty[action.payload] = 0;
            }
            
        }
    }
    

});

export const { addToCart, removeFromCart, updateCartCount, emptyCart,updateTotalPrice ,incQty, decQty} = CartSlice.actions;
export default CartSlice.reducer;