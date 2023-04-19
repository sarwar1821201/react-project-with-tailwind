import React from "react";
import { Link } from "react-router-dom";

const AppliedList = ({ data }) => {
  const {
    id,
    Salary,
    Job_title,
    Location,
    Company_Logo,
    Company_Name,
    Onsite_or_Remote,
    Fulltime_or_part_time,
  } = data;
  return (
    <div className="flex justify-between items-center gap-4">
      <img src={Company_Logo} className="w-40 h-20" alt="" />
      <div className="w-full flex justify-between items-center">
        <div>
          <h2>{Job_title}</h2>
          <h2>{Company_Name}</h2>
          <div className="flex gap-4">
            <h4>{Onsite_or_Remote}</h4>
            <h4>{Fulltime_or_part_time}</h4>
          </div>
          <div className="flex gap-4">
            <h3>{Location}</h3>
            <h4>{Salary}</h4>
          </div>
        </div>
        <Link to={`/details/${id}`} className="bg-indigo-400">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppliedList;
