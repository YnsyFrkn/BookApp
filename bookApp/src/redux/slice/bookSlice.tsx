import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../index/index";

interface BookState {
  books: any[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // API isteği başladı
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    // API isteği başarılı oldu
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });
    // API isteği hatalı oldu
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Bir hata oluştu";
    });
  },
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
