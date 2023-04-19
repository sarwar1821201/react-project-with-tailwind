import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobsAvaliable from "../JobsAvaliable/JobsAvaliable";
import ShowJobList from "./ShowJobList";

const JobList = () => {
  const jobList = useLoaderData();
  const [jobdata, setJobdata] = useState([])

  useEffect( ()=>{
    fetch('./jobdata.json')
    .then((res=> res.json()))
    .then(data=> setJobdata(data) )
  } , [])
   
  return (
    <div className="text-2xl">
      <div className=" flex max-w-[1320] md:py-[80] py-3 mx-auto flex-col sm:flex-row ">
        <div className="basis-[55%] ps-4 px-3">
          <h2 className="text-6xl ">
            One Step Closer To Your{" "}
            <span className="text-indigo-400">Dream Job</span>
          </h2>
          <p className="text-3xl pt-2">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-indigo-500 text-white rounded-none text-2xl">
            Get Started
          </button>
        </div>

        <div className="basis-[45%]">
          <img
            className="h-96 w-full"
            src="https://i.ibb.co/7KDb648/mohamad-khosravi-ikjv-Pf-C3pb-I-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      {/* jobcatergory section */}
      <div className="my-16">
        <h2 className="text-center text-3xl pt-2">Job Category List</h2>
        <div className="text-center text-1xl">
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols:2  max-w-[1320px] mx-auto gap-5 pt-4 px-7 ">
          {jobList.map((jobs) => (
            <JobsAvaliable jobs={jobs}></JobsAvaliable>
          ))}
        </div>
      </div>
      {/* job featured section */}
      <div>
        <h2 className="text-center text-3xl pt-2">Jop Featured</h2>
        <div className="text-center text-1xl">
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1  max-w-[1320px] mx-auto gap-5 pt-4 px-7 ">
          {jobdata.map((jobs) => (
            <ShowJobList key={jobs.id} jobs={jobs}></ShowJobList>
            // <ShowJobList jobs={jobs}></ShowJobList>
          ))}

        </div>
      </div>
    </div>
  );
};

export default JobList;
