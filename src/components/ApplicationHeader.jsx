import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilters } from "../features/filters/filtersSlice";

const ApplicationHeader = () => {
  const initialState = {
    search: "",
    sort: "",
  };
  const [filterValues, setFilterValues] = useState({ ...initialState });
  // note: change update listener
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilters(filterValues));
  }, [filterValues, dispatch]);
  const handleChange = (e) => {
    setFilterValues({
      ...filterValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            name="search"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            onChange={handleChange}
          />
        </div>
        <select
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
          onChange={handleChange}
        >
          <option value="">Default</option>
          <option value="lowTo">Salary (Low to High)</option>
          <option value="highTo">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicationHeader;
