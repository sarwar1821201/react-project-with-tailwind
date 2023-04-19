import React, { useDeferredValue, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import salaryIcon from "./../assets/Icons/Frame.png";
import jobIcon from "./../assets/Icons/Frame-1.png";
import phoneIcon from "./../assets/Icons/Frame-2.png";
import emailIcon from "./../assets/Icons/Frame-3.png";
import addressIcon from "./../assets/Icons/Frame-4.png";

const JobView = () => {
  const jobData = useParams();
  const LoadDatafromJson = useLoaderData();
  if (LoadDatafromJson) {
    localStorage.setItem("details", JSON.stringify(LoadDatafromJson));
  }

  const [views, setViews] = useState([]);
  useEffect(() => {
    const previousViews = JSON.parse(localStorage.getItem("details"));
    const jobViewId = previousViews?.find((job) => job.id == jobData.id);
    setViews(jobViewId);
  }, []);

  let {
    id,
    Job_Description,
    Job_Responsibility,
    Educational_Requirements,
    Experiences,
    Salary,
    Job_title,
    phone,
    email,
    Location,
    Company_Logo,
    Company_Name,
    Onsite_or_Remote,
    Fulltime_or_part_time,
  } = views;
  const handleAppliedJobs = (
    id,
    Salary,
    Job_title,
    phone,
    email,
    Location,
    Company_Logo,
    Company_Name,
    Onsite_or_Remote,
    Fulltime_or_part_time
  ) => {
    const previousAppliedJobs = JSON.parse(localStorage.getItem("AppliedJobs"));
    let AppliedJobs = [];
    const AppliedJob = {
      id,
      Salary,
      Job_title,
      phone,
      email,
      Location,
      Company_Logo,
      Company_Name,
      Onsite_or_Remote,
      Fulltime_or_part_time,
    };

    if (previousAppliedJobs) {
      const isAppliedJobs = previousAppliedJobs?.find((job) => job.id == id);
      if (isAppliedJobs) {
        return;
      } else {
        AppliedJobs.push(...previousAppliedJobs, AppliedJob);
        localStorage.setItem("AppliedJobs", JSON.stringify(AppliedJobs));
      }
    } else {
      AppliedJobs.push(AppliedJob);
      localStorage.setItem("AppliedJobs", JSON.stringify(AppliedJobs));
    }
  };
  console.log("views", views);

  return (
    <div className="text-2xl">
      <h1 className="text-center text-3xl">Job Details</h1>

      <div className=" flex max-w-[1320] md:py-[80] py-3 mx-auto flex-col sm:flex-row ">
        <div className="basis-[55%] ps-4 px-3 grid gap-6">
          <div>
            <h2>Job Description: </h2>
            {Job_Description}
          </div>
          <div>
            <h3>Job Responsibility: </h3>
            {Job_Responsibility}
          </div>
          <div>
            <h4>Educational Requirements: </h4>
            {Educational_Requirements}
          </div>
          <div>
            <h3>Experience: </h3>
            {Experiences}
          </div>
        </div>
        <div className="basis-[45%] ps-4 px-3 sm:flex-row">
          <h4 className="text-2xl text-center">Job Details</h4>
          <div className="flex items-center gap-4">
            <img src={salaryIcon} alt="" />
            <h3>Salary: {Salary} </h3>
          </div>

          <div className="flex items-center gap-4">
            <img src={jobIcon} alt="" />
            <h4>Job Title: {Job_title}</h4>
          </div>
          <h1>Contact Information: </h1>

          <div className="flex items-center gap-4">
            <img src={phoneIcon} alt="" />
            <h4>Phone: {phone} </h4>
          </div>

          <div className="flex items-center gap-4">
            <img src={emailIcon} alt="" />
            <h5>Email: {email} </h5>
          </div>

          <div className="flex items-center gap-4">
            <img src={addressIcon} alt="" />
            <h6>Address: {Location} </h6>
          </div>
          {/* button */}
          <button
            onClick={() =>
              handleAppliedJobs(
                id,
                Salary,
                Job_title,
                phone,
                email,
                Location,
                Company_Logo,
                Company_Name,
                Onsite_or_Remote,
                Fulltime_or_part_time
              )
            }
            className="bg-indigo-400 px-2 rounded-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobView;
