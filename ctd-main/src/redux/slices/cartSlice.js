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
        state.totalAmount -= existingItem.totalPrice; // Use totalPrice instead of price
    
        if (existingItem.quantity === 1) {
          // Remove item from the cart if the quantity is 1
          state.items = state.items.filter(item => item.id !== id);
        } else {
          // Otherwise, decrement quantity and adjust the total price
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
