import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'api';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  formData => addContact(formData)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return await deleteContact(contactId);
  }
);

//with error message from API
// export const fetchContactsThunk = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const data = await fetchContacts();
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContact',
//   async (formData, thunkAPI) => {
//     try {
//       const data = await addContact(formData);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await deleteContact(contactId);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
