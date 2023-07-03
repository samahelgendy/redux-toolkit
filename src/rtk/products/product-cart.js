import { createSlice } from '@reduxjs/toolkit'
export const productCart = createSlice({
    name: 'productCart',
    initialState: [],
    reducers: {
      addToCart: (state , action) => {
        const findProducts =  state.find((product) => product.id === action.payload.id );
       
        if(findProducts){
            findProducts.quantity +=1;
        }else{
            const productClone = {...action.payload , quantity:1};
            state.push(productClone);
        }
        
      },
      removeFromCart: (state , action) => {
         return state.filter( (product) => product.id !== action.payload.id)
             
        },
      clear: (state, action) => {
        return [];
      },
    },
  })
  
  export const { addToCart , removeFromCart , clear } = productCart.actions
  
  export default productCart.reducer