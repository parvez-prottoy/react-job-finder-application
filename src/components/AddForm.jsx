import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../features/jobs/jobsSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const navigate = useNavigate();
  const initialState = {
    title: "",
    type: "",
    salary: "",
    deadline: "",
  };
  const [addValues, setAddValues] = useState({ ...initialState });
  const handlerChange = (e) => {
    e.preventDefault();
    setAddValues({ ...addValues, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.jobs);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createJob(addValues));
    if (!error) {
      toast.success("Add Job Successfully");
      navigate("/");
    }
  };
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="fieldContainer">
            <label
              htmlFor="lws-JobTitle"
              className="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              onChange={handlerChange}
              id="lws-JobTitle"
              name="title"
              required
            >
              <option defaultValue="" hidden>
                Select Job
              </option>
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
              onChange={handlerChange}
              id="lws-JobType"
              name="type"
              required
            >
              <option defaultValue="" hidden>
                Select Job Type
              </option>
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
                onChange={handlerChange}
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
              onChange={handlerChange}
              id="lws-JobDeadline"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddForm;
