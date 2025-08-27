// src/features/car/carSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars; // state.car phải tồn tại
export default carSlice.reducer;
