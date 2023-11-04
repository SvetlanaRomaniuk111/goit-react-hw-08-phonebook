import { nanoid } from '@reduxjs/toolkit';

export const createObjectContact = data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
      completed: false,
    },
  };
};

export const handlePending = (state, _) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  console.log('payload :>>', payload);
  state.error = payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleFulfilledFetch = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  console.log(payload)
  state.items = [...state.items, payload];
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};
