import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addSlice: (state, action) => {
      return action.payload;
    },
    removeSlice: (state, action) => {
      return null;
    },
  },
});

export const { addSlice, removeSlice } = userSlice.actions;

export default userSlice.reducer;
