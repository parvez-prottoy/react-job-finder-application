import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJob, getJob, getJobs, patchJob, postJob } from "./jobsAPI";

// note: initialState
const initialState = {
  jobs: [],
  job: {},
  isLoading: false,
  fetching: false,
  isError: false,
  error: null,
};
// note: async thunk - fetchJobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
// note: async thunk - fetchJob
export const fetchJob = createAsyncThunk("jobs/fetchJob", async (id) => {
  const job = await getJob(id);
  return job;
});
// note: async thunk - createJob
export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const job = await postJob(data);
  return job;
});
// note: async thunk - editJob
export const editJob = createAsyncThunk(
  "jobs/editJob",
  async ({ id, data }) => {
    const job = await patchJob({ id, data });
    return job;
  }
);
// note: async thunk - deleteJob
export const removeJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  const job = await deleteJob(id);
  return job;
});
// note: jobsSlice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    // note: fetchJobs
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.error = null;
        state.fetching = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.error = null;
        state.fetching = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error?.message;
      });
    // note: fetchJob
    builder
      .addCase(fetchJob.pending, (state) => {
        state.error = null;
        state.fetching = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.error = null;
        state.fetching = false;
        state.job = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error?.message;
      });
    // note: createJob
    builder
      .addCase(createJob.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.jobs.unshift(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
    // note: editJob
    builder
      .addCase(editJob.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.jobs = state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        );
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
    // note: removeJob
    builder
      .addCase(removeJob.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});
export default jobsSlice.reducer;
