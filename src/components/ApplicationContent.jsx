import React from "react";
import ApplicationHeader from "./ApplicationHeader";
import Jobs from "./Jobs";

const ApplicationContent = () => {
  return (
    <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <ApplicationHeader />

      <Jobs />
    </main>
  );
};

export default ApplicationContent;
