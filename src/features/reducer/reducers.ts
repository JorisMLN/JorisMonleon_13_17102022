import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AuthState {
  login: string
  userId: string;
  token: string
};

// Define the initial state using that type
const initialState: AuthState = {
  login: '',
  userId: '',
  token: ''
} 

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeLogin: (state, action) => {
      console.log(action)
      state.login = action.payload
      console.log(state)
    },
    storeToken: (state, action) => {
      console.log(action)
      state.token = action.payload
      console.log(state)
    }
  }
});

const store = configureStore({
  reducer: authSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { storeLogin, storeToken } = authSlice.actions;
export default store;