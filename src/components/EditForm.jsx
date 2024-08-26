import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJob, fetchJob } from "../features/jobs/jobsSlice";
import Loading from "./Loading";
import toast from "react-hot-toast";

const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, job, error } = useSelector((state) => state.jobs) || {};
  const { title, type, salary, deadline } = job || {};
  const [updateValues, setUpdateValues] = useState({
    title,
    type,
    salary,
    deadline,
  });
  const handleChange = (e) => {
    setUpdateValues({
      ...updateValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      editJob({
        id: job.id,
        data: {
          title: updateValues.title,
          type: updateValues.type,
          salary: updateValues.salary,
          deadline: updateValues.deadline,
        },
      })
    );
    toast.success("Edit Successfully");
    navigate("/");
  };
  // note: decide what to render
  let content = null;
  if (isLoading && !error) content = <Loading />;
  if (!isLoading && error) content = <p>{error}</p>;
  if (!isLoading && !error && job.id)
    content = (
      <form onSubmit={handleUpdate} className="space-y-6">
        <div className="fieldContainer">
          <label
            htmlFor="lws-JobTitle"
            className="text-sm font-medium text-slate-300"
          >
            Job Title
          </label>
          <select
            onChange={handleChange}
            id="lws-JobTitle"
            name="title"
            value={updateValues.title}
            required
          >
            <option hidden>Select Job</option>
            <option>Software Engineer</option>
            <option>Software Developer</option>
            <option>Full Stack Developer</option>
            <option>MERN Stack Developer</option>
            <option>DevOps Engineer</option>
            <option>QA Engineer</option>
            <option>Product Manager</option>
            <option>Social Media Manager</option>
            <option>Senior Executive</option>
            <option>Junior Executive</option>
            <option>Android App Developer</option>
            <option>IOS App Developer</option>
            <option>Frontend Developer</option>
            <option>Frontend Engineer</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lws-JobType">Job Type</label>
          <select
            onChange={handleChange}
            value={updateValues.type}
            id="lws-JobType"
            name="type"
            required
          >
            <option hidden>Select Job Type</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lws-JobSalary">Salary</label>
          <div className="flex border rounded-md shadow-sm border-slate-600">
            <span className="input-tag">BDT</span>
            <input
              type="number"
              name="salary"
              id="lws-JobSalary"
              onChange={handleChange}
              value={updateValues.salary}
              required
              className="!rounded-l-none !border-0"
              placeholder="20,00,000"
            />
          </div>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lws-JobDeadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            id="lws-JobDeadline"
            value={updateValues.deadline}
            required
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            id="lws-submit"
            className="cursor-pointer btn btn-primary w-fit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

      <div className="max-w-3xl mx-auto">{content}</div>
    </main>
  );
};

export default EditForm;
