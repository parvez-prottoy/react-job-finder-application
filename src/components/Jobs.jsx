import React, { useEffect } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";
import Loading from "./Loading";

const Jobs = () => {
  const dispatch = useDispatch();
  const { fetching, jobs, error } = useSelector((state) => state.jobs);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  // note: filter by type
  const filterByType = (job) => {
    const { filter } = filters;
    switch (filter) {
      case "Internship":
        return job.type.toLowerCase() === "internship";
      case "FullTime":
        return job.type.toLowerCase() === "full time";
      case "Remote":
        return job.type.toLowerCase() === "remote";

      default:
        return true;
    }
  };
  // note: filter by search
  const filterBySearch = (job) => {
    const { search } = filters;
    if (search) {
      return job.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  };
  // note: sort
  const sortJob = (jobs) => {
    const { sort } = filters;
    if (sort === "lowTo") {
      // ascending
      return jobs.sort((a, b) => Number(a.salary) - Number(b.salary));
    } else if (sort === "highTo") {
      // descending
      return jobs.sort((a, b) => Number(b.salary) - Number(a.salary));
    } else {
      return jobs;
    }
  };
  // note: decide what to render
  let content = null;
  if (fetching && !error) {
    content = <Loading />;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (!fetching || !error) {
    if (jobs.length > 0) {
      // filter
      const jobsToShow = sortJob(
        jobs.filter(filterByType).filter(filterBySearch)
      );
      content =
        jobsToShow.length > 0 ? (
          jobsToShow.map((job) => <Job key={job.id} job={job} />)
        ) : (
          <p>No jobs found!!!</p>
        );
    } else {
      content = <p>No jobs found!!!</p>;
    }
  }
  return <div className="jobs-list">{content}</div>;
};

export default Jobs;
