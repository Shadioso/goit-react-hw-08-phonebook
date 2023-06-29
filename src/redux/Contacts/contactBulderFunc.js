export const handlePending = state => {
  state.isLoading = `pending`;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = `fulfilled`;
  state.items = action.payload.sort((a, b) => a.name.localeCompare(b.name));
  state.error = ``;
};

export const handleRejected = (state, action) => {
  state.isLoading = `rejected`;
  state.error = action.error;
};
//
export const handleAddContact = (state, action) => {
  state.isLoading = `fulfilled`;
  state.items.push(action.payload);
};
//

export const handleDeleteContact = (state, action) => {
  state.isLoading = `fulfilled`;
  state.items = state.items
    .filter(item => item.id !== action.payload.id)
    .sort((a, b) => a.name.localeCompare(b.name));
};
