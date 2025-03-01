import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api"; 

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/contacts"); 
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await api.post("/contacts", newContact); 
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await api.delete(`/contacts/${contactId}`); 
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);