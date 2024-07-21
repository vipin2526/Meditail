import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import treatmentReducer from '../features/treatments/treatmentSlice';
import consultationReducer from '../features/consultation/consultationSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    treatments: treatmentReducer,
    consultation: consultationReducer
  },
})