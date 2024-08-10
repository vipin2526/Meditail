import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../components/js/userApi'
import defaultSuggestion from './defaultSuggestion.js';

const initialState = {
    defaultSuggestion,
    chatLog: [],
    status: 'idle',
    error: null,
};

const consultationSlice = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        addConsultation: (state, action) => {
            state.chatLog.push(action.payload);
        },
        removeConsultation: (state, action) => {
            state.chatLog = state.chatLog.filter(consultation => consultation.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChatResponse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchChatResponse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.chatLog.push({ user: 'Meditail AI', message: action.payload });
            })
            .addCase(fetchChatResponse.rejected, (state, action) => {
                state.status = 'succeeded';
                // state.error = 'I failed to understand, Please ask your question again.';
                state.chatLog.push({ user: 'Meditail AI', message: 'I failed to understand, Please ask your question again.'});
            });
    },
});

export const fetchChatResponse = createAsyncThunk(
    'consultation/fetchChatResponse',
    async (userInput) => {
        const response = await userApi.post('/api/user/consult', { input: userInput });
        return response.data.result;
    }
);
export const { addConsultation, removeConsultation } = consultationSlice.actions;

export default consultationSlice.reducer;
