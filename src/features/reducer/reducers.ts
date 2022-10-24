import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  login: string
  token: string
};

// Define the initial state using that type
const initialState: CounterState = {
  login: '',
  token: ''
} 

const counterSlice = createSlice({
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
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { storeLogin, storeToken } = counterSlice.actions;
export default store;