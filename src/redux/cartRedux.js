import {createSlice} from '@reduxjs/toolkit';

const cartSlice =  createSlice({
    name:'cart',
    initialState: {
        products: [],
        totale:0,
        Favorite:[],
        
    },

    reducers : {
        addProduct: (state, action) =>{
            state.products.push(action.payload );
            state.totale += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state,action)=>{
                // state.quantity = state.quantity>0?state.quantity-=action.payload.quantity:state.quantity;
                state.totale = state.totale>0? state.totale -= action.payload.price*action.payload.quantity :state.totale ;
                state.products=state.products.filter((item) => JSON.stringify(item)  !== JSON.stringify(action.payload) );
        },
        addToFavorite: (state,action) => {
            
            state.Favorite.push(action.payload)
        },
        deletFavorite: (state,action) =>{

            state.Favorite=state.Favorite.filter((item) => item.product._id !== action.payload)
        }

        
        
    },

});

export const {addProduct,deleteProduct,addToFavorite,deletFavorite} = cartSlice.actions;
export default cartSlice.reducer;