import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  login: string
  // name: string
};

// Define the initial state using that type
const initialState: CounterState = {
  login: '',
  // name: ''
} 

const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action)
      state.login = action.payload
      console.log(state)
      // state.value += 1;
    },
    decrement: state => {
      // state.value -= 1;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()));

export const { increment, decrement } = counterSlice.actions;
export default store;