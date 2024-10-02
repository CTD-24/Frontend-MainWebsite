import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import authReducer from "./slices/authSlice";
import cartReducer from './slices/cartSlice';

// Create separate persist configurations
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // Add auth and cart to the whitelist to persist both
};

// Combine reducers so you can persist both slices
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

// Persist the combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor for the store
export const persistor = persistStore(store);
