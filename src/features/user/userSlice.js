import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../components/js/userApi'

const initialState = {
  id: null,
  name: '',
  email: '',
  status: 'idle',
  error: null,
  login: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser(state) {
      state.id = null;
      state.name = '';
      state.email = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { id, name, email } = action.payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.status = 'succeeded';
        state.login = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { id, name, email } = action.payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(tokenLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(tokenLogin.fulfilled, (state, action) => {
        const { id, name, email } = action.payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.status = 'succeeded';
        state.login = true;
        state.error = null;
      })
      .addCase(tokenLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

  },
});

// Async thunks for login and register
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await userApi.post('/api/user/login', credentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userApi.post('/api/user/register', userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const tokenLogin = createAsyncThunk(
  'user/tokenlogin',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userApi.get('/api/user/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);



export const { logoutUser, islogin } = userSlice.actions;

export default userSlice.reducer;
