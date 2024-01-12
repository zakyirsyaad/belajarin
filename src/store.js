import { configureStore } from "@reduxjs/toolkit";
import authReducer, { initializeAuthState } from './Redux/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

store.dispatch(initializeAuthState());

export default store