import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import filtersReducer from "../features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer,
  },
});
export default store;
