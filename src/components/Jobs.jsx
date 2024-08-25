import React, { useEffect } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";
import Loading from "./Loading";
import toast from "react-hot-toast";

const Jobs = () => {
  const dispatch = useDispatch();
  const { isLoading, jobs, isError, error } = useSelector(
    (state) => state.jobs
  );
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  // note: decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <p>{error}</p>;
  if (!isLoading && !isError && jobs.length === 0)
    content = <p>No jobs found!!!</p>;
  if (!isLoading && !isError && jobs.length > 0)
    content = jobs.map((job) => <Job key={job.id} job={job} />);
  return <div className="jobs-list">{content}</div>;
};

export default Jobs;
