import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../service/api";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (search: any) => {
    try {
      const response = await api.get(`/search.json?q=${search}`);
      console.log(response.data);
      return response.data.docs;
    } catch (error) {
      console.error("API isteği hatası:", error);
      throw error;
    }
  }
);
