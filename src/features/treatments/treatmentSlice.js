import { createSlice } from '@reduxjs/toolkit';
import defaultData from './defaultData';

const initialState = defaultData;

const treatmentSlice = createSlice({
    name: 'treatments',
    initialState,
    reducers: {
        addTreatment: (state, action) => {
            state.push(action.payload);
        },
        removeTreatment: (state, action) => {
            return state.filter(treatment => treatment.id !== action.payload);
        },
    },
});

export const { addTreatment, removeTreatment } = treatmentSlice.actions;

export default treatmentSlice.reducer;
