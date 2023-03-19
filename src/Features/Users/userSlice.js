import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Rashmi Dhunganan" },
  { id: "1", name: "Prashant Aryal" },
  { id: "2", name: "Sushant Aryal" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
