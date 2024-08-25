import React from "react";

const ApplicationHeader = () => {
  return (
    <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 class="lws-section-title">All Available Jobs</h1>
      <div class="flex gap-4">
        <div class="search-field group flex-1">
          <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            class="search-input"
            id="lws-searchJob"
          />
        </div>
        <select id="lws-sort" name="sort" autocomplete="sort" class="flex-1">
          <option>Default</option>
          <option>Salary (Low to High)</option>
          <option>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicationHeader;
