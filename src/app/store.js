import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import treatmentReducer from '../features/treatments/treatmentSlice';
import consultationReducer from '../features/consultation/consultationSlice';
import profileReducer from '../features/profile/profileSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    treatments: treatmentReducer,
    consultation: consultationReducer,
    profile: profileReducer
  },
})