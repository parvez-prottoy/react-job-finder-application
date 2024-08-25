import { createSlice } from "@reduxjs/toolkit";
// note: initialState
// ? possible filter values - ["","Internship","FullTime","Remote"]
// ? possible sort values - ["","lowTo","highTo"]
const initialState = {
  filter: "",
  search: "",
  sort: "",
};
// note: create filters slice
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // note: update filter,search,sort
    updateFilters: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});
export default filtersSlice.reducer;
export const { updateFilters } = filtersSlice.actions;
