export const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.err = '';
};
export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  console.log(payload);
  state.err = payload;
};

export const handleFulfiledLogin = (state, { payload }) => {
  state.name = payload.user.name;
  state.email = payload.user.email;
  state.isAuth = true;
};
