import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import treatmentReducer from '../features/treatments/treatmentSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    treatments: treatmentReducer
  },
})