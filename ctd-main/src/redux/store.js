// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import authReducer from "./slices/authSlice"; // Import only the reducer

const persistConfig = {
  key: "root", // Key for the persisted state
  storage, // Storage method
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Use the persisted reducer
  },
});

export const persistor = persistStore(store);
