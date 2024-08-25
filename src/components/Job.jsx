import React from "react";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <div class="lws-single-job">
      <div class="flex-1 min-w-0">
        <h2 class="lws-title">Back End Developer</h2>
        <div class="job-footers">
          <div class="lws-type">
            <i class="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
            Full-time
          </div>
          <div class="lws-salary">
            <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT 40,000
          </div>
          <div class="lws-deadline">
            <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on 2022-12-31
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="hidden sm:block">
          <Link to="/jobs/edit-job">
            <button type="button" class="lws-edit btn btn-primary">
              <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </Link>
        </span>

        <span class="sm:ml-3">
          <button type="button" class="lws-delete btn btn-danger ">
            <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;
