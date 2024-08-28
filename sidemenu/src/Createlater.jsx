// import React,{ useState } from 'react'
// import './Createlater.css'
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, LineChart, Line,AreaChart, Area,Treemap,ComposedChart} from 'recharts';
// import ReactECharts from 'echarts-for-react';

// function App() {

//   const Data = [
//     {
//       "name": "Facebook",
//       "users": 290000
//     },
//     {
//       "name": "Instagram",
//       "users": 150000
//     },
//     {
//       "name": "Twitter",
//       "users": 45000
//     },
//     {
//       "name": "LinkedIn",
//       "users": 90000
//     },
//     {
//       "name": "Pinterest",
//       "users": 45000
//     }
//   ]


// const Option1 = {
//   tooltip: {
//     trigger: 'item'
//   },
//   legend: {
//     top: '5%',
//     left: 'center'
//   },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: ['40%', '70%'],
//       avoidLabelOverlap: false,
//       itemStyle: {
//         borderRadius: 10,
//         borderColor: '#fff',
//         borderWidth: 2
//       },
//       label: {
//         show: false,
//         position: 'center'
//       },
//       emphasis: {
//         label: {
//           show: true,
//           fontSize: 40,
//           fontWeight: 'bold'
//         }
//       },
//       labelLine: {
//         show: false
//       },
//       data: Data.map((item)=>({value:item.users,name : item.name}))
//     }
//   ]
// };

// const Option2 = {
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: Data.map((item)=>(item.name))
//     //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: Data.map((item)=>(item.users)),
//       type: 'line',
//       areaStyle: {}
//     }
//   ]
// };

//   return (

//       <div>
//         <h1>Bar and Pie Charts</h1>
//         <h2>Social Media Users</h2>
//         <ReactECharts option={Option1} />
//         <ReactECharts option={Option2} />
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="users"
//             isAnimationActive={false}
//             data={Data}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Tooltip />
//         </PieChart>
//         <BarChart
//           width={500}
//           height={300}
//           data={Data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="users" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//         </BarChart>
//         <LineChart
//           width={500}
//           height={300}
//           data={Data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//         <AreaChart
//           width={500}
//           height={400}
//           data={Data}
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
//           <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//         {/* <Treemap width={400} height={200} data={Data} dataKey="users" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8" /> */}
//         <ComposedChart
//           layout="vertical"
//           width={500}
//           height={400}
//           data={Data}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis type="number" />
//           <YAxis dataKey="name" type="category" scale="band" />
//           <Tooltip />
//           <Legend />
//           <Area dataKey="users" fill="#8884d8" stroke="#8884d8" />
//         </ComposedChart>
//       </div>
//   )
// }

// export default App


import React from 'react'

function Createlater() {
  return (
    <div>Createlater</div>
  )
}

export default Createlater