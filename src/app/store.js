// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer, // phải trùng với state.car
  },
});
