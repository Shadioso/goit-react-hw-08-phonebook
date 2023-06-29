import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/api';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  handleAddContact,
  handleDeleteContact,
} from './bulderFunc';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const cotactsReducer = createSlice({
  name: `contacts`,
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});
