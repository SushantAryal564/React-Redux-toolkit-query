import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
export const fetchUsers = createAsyncThunk("usrs/fetchUsrs", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});
const initialState = [
  { id: "0", name: "Rashmi Dhunganan" },
  { id: "1", name: "Prashant Aryal" },
  { id: "2", name: "Sushant Aryal" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
