import {createSlice} from '@reduxjs/toolkit';

const cartSlice =  createSlice({
    name:'cart',
    initialState: {
        products: [],
        totale:0,
    },

    reducers : {
        addProduct: (state, action) =>{
            console.log(action.payload)
            state.products.push(action.payload );
            state.totale += action.payload.price * action.payload.quantity;
           
            
        },
        deleteProduct: (state,action)=>{
                // state.quantity = state.quantity>0?state.quantity-=action.payload.quantity:state.quantity;
                state.totale = state.totale>0? state.totale -= action.payload.price*action.payload.quantity :state.totale ;
                state.products=state.products.filter((item) => JSON.stringify(item)  !== JSON.stringify(action.payload) )
        },

        
        
    },

});

export const {addProduct,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;