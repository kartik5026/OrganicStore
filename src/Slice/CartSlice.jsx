import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productName: [],
    price: [],
    imageUrl: [],
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
        },
        removeFromCart: (state, action) => {

            state.productName.splice(action.payload, 1)
            state.price.splice(action.payload, 1)
            state.imageUrl.splice(action.payload, 1)
        },
        updateCartCount: (state) => {

            state.count = state.productName.length;
        },
        updateTotalPrice: (state) => {
            let total = 0;
            state.price.map((val) => {
                total += val;
            })
            state.totalPrice=total;
        },
        emptyCart: (state) => {
            state.productName.length = 0;
            state.price.length = 0;
            state.imageUrl.length = 0;
        }
    }
    

});

export const { addToCart, removeFromCart, updateCartCount, emptyCart,updateTotalPrice } = CartSlice.actions;
export default CartSlice.reducer;