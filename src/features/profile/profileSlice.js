import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../components/js/userApi';

// Fetch profile data
export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async () => {
        const response = await userApi.get('/api/user/profile');
        if (!response) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    }
);

// Update profile data
export const updateProfileData = createAsyncThunk(
    'profile/updateProfileData',
    async (updatedData) => {
        const response = await userApi.put('/api/user/profile', updatedData);
        if (!response) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Update the profile data in the state
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default profileSlice.reducer;