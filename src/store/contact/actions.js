import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createContact,
  deleteContact,
  fetchAllContacts,
  updateContact,
} from 'api/contacts';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchAllContacts()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async formData => {
    return await createContact(formData);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return await deleteContact(contactId);
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  async formData => {
    return await updateContact(formData);
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
