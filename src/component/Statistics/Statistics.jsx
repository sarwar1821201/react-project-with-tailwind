import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Assignment-1',
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Assignment-2',
    uv: 55,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Assignment-3',
    uv: 48,
    pv: 9800,
    amt: 2290,
  },

  {
    name: 'Assignment-4',
    uv: 60,
    pv: 9800,
    amt: 2290,
  },

  {
    name: 'Assignment-5',
    uv: 53,
    pv: 9800,
    amt: 2290,
  },

  {
    name: 'Assignment-6',
    uv: 50,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Assignment-7',
    uv: 60,
    pv: 9800,
    amt: 2290,
  },
  
];

export default function  Statistics() {


 
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }





// Statistics

// {
//     name: 'Assignment-1', value: 57, },
//   {
//     name: 'Assignment-2', value: 55,
//   },
//   {
//     name: 'Assignment-3', value: 48,
//   },
//   {
//     name: 'Assignment-4', value: 60,
//   },
//   {
//     name: 'Assignment-5', value: 53,
//   },
//   {
//     name: 'Assignment-6', value: 50,
//   },
//   {
//     name: 'Assignment-7', value: 60,
//   },


// import React, { PureComponent } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//       { name: ' ASsignment-1',  data: 57, },
//       {  name: 'ASsignment-2',  value: 55, },
//       { name: 'ASsignment-3', value: 48, },
//       { name: 'ASsignment-4',  value: 60, },
//       { name: 'ASsignment-5', value: 53, },
//       { name: 'ASsignment-6', value: 50,},
//       {name: 'ASsignment-7', value: 60, },
    
// ];

// export default function Statistics() {
  

 
//     return (
//       <ResponsiveContainer width="100%" aspect={3}>
//         <AreaChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
//   }
