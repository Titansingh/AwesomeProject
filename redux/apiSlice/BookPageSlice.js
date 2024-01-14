import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  lastSearches: [{id: 1, text: 'Bill Gates'}],
};

export const bookPageSlice = createSlice({
  name: 'bookPage',
  initialState,
  reducers: {
    addLastSearch: (state, action) => {
      const lastSearch = {
        id: nanoid(),
        text: action.payload,
      };
      state.lastSearches.push(lastSearch);

      if (state.lastSearches.length > 4) {
        state.lastSearches.splice(0, 1);
      }
    },
    removeLastSearch: (state, action) => {
      state.lastSearches = state.lastSearches.filter(
        lastSearch => lastSearch.id !== action.payload,
      );
    },
  },
});

export const {addLastSearch, removeLastSearch} = bookPageSlice.actions;
export default bookPageSlice.reducer;
