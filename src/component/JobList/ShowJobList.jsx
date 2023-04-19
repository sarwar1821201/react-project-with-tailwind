import React from "react";
import { Link } from "react-router-dom";

const ShowJobList = ({jobs}) => {
    const {id, Company_Logo, Job_title, Company_Name, Onsite_or_Remote, Fulltime_or_part_time, Location, Salary} =jobs;
  return (
    <div className="border-2 border-sky-500 px-4 py-2  ">
      <img src={Company_Logo} alt="" />
      <h2>{Job_title}</h2>
      <h4>{Company_Name}</h4>
      <div className="flex gap-4">
        <h4>{Onsite_or_Remote}</h4>
        <h4>{Fulltime_or_part_time}</h4>
      </div>
      <div className="flex gap-4">
        <h3>{Location}</h3>
        <h4>{Salary}</h4>
      </div>
      <Link to={`/details/${id}`}  className="bg-indigo-400">View Details</Link>
    </div>
  );
};

export default ShowJobList;
