import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-2xl'>
          
           <div className=' flex px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-cyan-500 justify-between' >
           <div className='relative flex items-center  text-3xl'>
             <h2>JobHunt</h2>
            </div>

            <div className=' justify-between space-x-2 md:space-x-8  '>
           <Link to="/">Home</Link>
           <Link to="/statistics">Statistics</Link>
           <Link to="/appliedjob">Applied Job</Link>
           <Link to="/blog">Blog</Link>

            </div>

            <div>
                <button className='bg-indigo-500 border-solid'>Start Applying</button>
            </div>
           </div>

           
            
        </div>
    );
};

export default Header;