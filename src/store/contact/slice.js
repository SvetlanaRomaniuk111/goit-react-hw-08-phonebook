import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './actions';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledFetch,
  handlePending,
  handleRejected,
} from './helpers';

const initialState = {
  items: [],
  filteredItems: null,
  isLoading: false,
  error: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, { payload }) => {
      state.filteredItems = payload
        ? state.items.filter(el =>
            el.name.toLowerCase().includes(payload.toLowerCase())
          )
        : null;
    },
    deleteContactSync: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledFetch)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const contactReducer = contactSlice.reducer;
export const { filterContact, deleteContactSync } = contactSlice.actions;

// extraReducers: builder => {
//     builder
//       .addCase(fetchContactsThunk.pending, (state, _) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
//         state.items = payload;
//         state.isLoading = false;
//       })
//       .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })

//       .addCase(addContactThunk.pending, (state, _) => {
//         state.isLoading = true;
//       })
//       .addCase(addContactThunk.fulfilled, (state, { payload }) => {
//         state.items = [...state.items, payload];
//         state.isLoading = false;
//       })
//       .addCase(addContactThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })

//       .addCase(deleteContactThunk.pending, (state, _) => {
//         state.isLoading = true;
//       })
// .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
//   state.items = state.items.filter(el => el.id !== payload.id);
//   state.isLoading = false;
// })
//       .addCase(deleteContactThunk.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       });
//   },

// export const contactReducer = contactSlice.reducer;
// export const { filterContact, deleteContactSync } = contactSlice.actions;
