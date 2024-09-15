import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload]; 
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, firstName, lastName, email, age } = action.payload;
      const existingUser = state.users.find(user => user.id === id);
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.email = email;
        existingUser.age = age;
  
    }
  }
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
