import { createSlice } from '@reduxjs/toolkit';

const savedUser = JSON.parse(localStorage.getItem('user'));
const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const initialState = {
  isLoggedIn: savedIsLoggedIn || false,
  user: savedUser || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;

      // Save user data and logged-in status to localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;

      
    },
    restoreAuthState: (state) => {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (savedIsLoggedIn && savedUser) {
        state.isLoggedIn = true;
        state.user = savedUser;
      }
    }
  },
});

export const { login, logout, restoreAuthState } = authSlice.actions;

export default authSlice.reducer;
