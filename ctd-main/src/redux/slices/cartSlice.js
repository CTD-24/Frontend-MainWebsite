import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
    totalAmount: 0, // Total price of items in the cart
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
        existingItem.totalPrice += newItem.price; // Adjust total price
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      
      state.totalAmount += newItem.price; // Update total cart amount
    },
    
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
    
      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove item if quantity is 1, but subtract only the price of that item
          state.totalAmount -= existingItem.price; // Subtract the price of a single item
          state.items = state.items.filter(item => item.id !== id);
        } else {
          // Otherwise, decrement the quantity and adjust total price accordingly
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price; // Decrease the item's total price
          state.totalAmount -= existingItem.price; // Subtract the price of a single item
        }
      }
      
      // Ensure totalAmount doesn't go below 0
      if (state.totalAmount < 0) {
        state.totalAmount = 0;
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

// Selector to get the total amount from the cart
export const selectTotalAmount = (state) => state.cart.totalAmount;

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
