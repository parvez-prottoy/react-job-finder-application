import axios from "../../utils/axios";

export const getJobs = async () => {
  const res = await axios.get("/jobs");
  return res.data;
};
