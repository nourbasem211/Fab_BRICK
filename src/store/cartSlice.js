import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],   // {id, name, price, img, quantity}
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    addItem(state, action) {
      const item = action.payload; // {id,name,price,img}
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  toggleCart,
  openCart,
  closeCart,
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
