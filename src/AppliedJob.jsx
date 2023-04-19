import React, { useEffect, useState } from "react";
import AppliedList from "./AppliedList";

const AppliedJob = () => {
  const [viewsData, setViewsData] = useState([]);
  useEffect(() => {
    const previousViews = JSON.parse(localStorage.getItem("AppliedJobs"));
    setViewsData(previousViews);
  }, []);
  return (
    <div className="container mx-auto">
      <h1>Applied Jobs</h1>
      <div className="my-16 py-8 grid gap-5">
        {viewsData?.map((data) => (
          <AppliedList data={data} key={data.id}></AppliedList>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
