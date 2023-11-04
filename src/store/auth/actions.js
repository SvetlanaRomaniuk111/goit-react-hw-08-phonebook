const { createAsyncThunk } = require('@reduxjs/toolkit');
const { registrate, auth, logout, login } = require('api/user');

export const registrateThunk = createAsyncThunk(
  'auth/registrate',
  async (formData, thunkAPI) => {
    try {
      const data = await registrate(formData);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const data = await login(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const authThunk = createAsyncThunk(
  'auth/auth',
  async () => await auth()
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async () => await logout()
);
