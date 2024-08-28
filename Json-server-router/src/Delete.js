import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link,useNavigate } from 'react-router-dom';

function Delete() {

    const[Data,setData] = useState([])
    const{id} = useParams()

    const navigate = useNavigate();


    useEffect(()=>{
     axios.get('http://localhost:8000/library/'+id)
     .then(res=>setData(res.data))
     .catch(err=>console.log(err));
    },[]) 

    const handleDelete = (id) => {
        axios.delete('http://localhost:8000/library/'+id)
        .then(res=>{
            navigate('/');
        })
        .catch(err=>console.log(err));
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h3>Delete User ?</h3>

                <div className='mb-2'>
                    <strong>BookID : {Data.id}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Author : {Data.author}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Issuing Person : {Data.issuingPerson}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Issue Date : {Data.issueDate}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Submission Date : {Data.submissionDate}</strong>
                </div>
                <button onClick={(e) => handleDelete(id)} className='btn btn-success'>Delete</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            
        </div>
    </div>
  )
  
}

export default Delete