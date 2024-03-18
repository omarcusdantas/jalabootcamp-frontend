import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        ...action.payload,
        id: state.users.length === 0? 1 : state.users[state.users.length - 1].id + 1,
      };

      state.users = [...state.users, newUser];
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id === updatedUser.id);
      state.users[index] = updatedUser;
    }
  },
});

export const { createUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
