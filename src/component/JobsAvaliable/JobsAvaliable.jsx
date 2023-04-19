import React from 'react';

const JobsAvaliable = ({jobs}) => {
    const {categoryLogo, categoryName,jobsAvaliable} = jobs;
    return (
        <div className='text-2xl sm:flex-row'>
             <img src={categoryLogo} alt="" />
             <h2>{categoryName}</h2>
             <p>{jobsAvaliable}</p>
        </div>
    );
};

export default JobsAvaliable;