import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const[Data,setData] = useState([])


   useEffect(()=>{
    axios.get('http://localhost:3000/library')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
   },[]) 

  return (
    <div className="custom-container">
        <h1>Library Management</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="create" className='btn btn-success'>Add New</Link>
                </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Issuing Person</th>
                        <th>Issuing Date</th>
                        <th>Submission Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.author}</td>
                                <td>{d.issuingPerson}</td>
                                <td>{d.issueDate}</td>
                                <td>{d.submissionDate}</td>
                                <td>
                                    <Link to={`/update/${d.id}`}className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <Link to={`/delete/${d.id}`}className='btn btn-sm btn-danger'>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home