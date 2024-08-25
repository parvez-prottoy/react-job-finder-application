import axios from "../../utils/axios";
// note: fetch jobs api
export const getJobs = async () => {
  const res = await axios.get("/jobs");
  return res.data;
};
// note: get single job api
export const getJob = async (id) => {
  const res = await axios.get(`/jobs/${id}`);
  return res.data;
};
// note: post single job api
export const postJob = async (data) => {
  const res = await axios.post("/jobs", data);
  return res.data;
};
// note: patch single job api
export const patchJob = async ({ id, data }) => {
  const res = await axios.get(`/jobs/${id}`, data);
  return res.data;
};
// note: delete single job api
export const deleteJob = async (id) => {
  const res = await axios.delete(`/jobs/${id}`);
  return res.data;
};
