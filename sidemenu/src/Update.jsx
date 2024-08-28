import React, { useState,useEffect } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

function Update() {

    const{id} = useParams()
    const[Values,setValues]=useState({
        id:'',
        author:'',
        issuingPerson:'',
        issueDate:'',
        submissionDate:''
    })

    const navigate = useNavigate();


    useEffect(()=>{
     axios.get('http://localhost:3000/library/'+id)
     .then(res=>setValues(res.data))
     .catch(err=>console.log(err));
    },[]) 

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/library/'+id, Values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Edit record Details</h1>
            <form onSubmit={handleUpdate}>
                <div className='mb-2'>
                    <label htmlFor='id'>Book ID</label>
                    <input type='text'name='id' className='form-control' placeholder='Enter Book ID'
                    value={Values.id} onChange={e=>setValues({...Values,id:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='author'>Author</label>
                    <input type='text'name='author' className='form-control' placeholder='Enter Author Name'
                    value={Values.author} onChange={e=>setValues({...Values,author:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='issuingPerson'>Issuing Person</label>
                    <input type='text'name='issuingPerson' className='form-control' placeholder='Enter Issuing Person'
                    value={Values.issuingPerson} onChange={e=>setValues({...Values,issuingPerson:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='issueDate'>Issue Date</label>
                    <input type='text'name='issueDate' className='form-control' placeholder='Enter Issue Date'
                    value={Values.issueDate} onChange={e=>setValues({...Values,issueDate:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='submissionDate'>Submission Date</label>
                    <input type='text'name='submissionDate' className='form-control' placeholder='Enter Submission Date'
                    value={Values.submissionDate} onChange={e=>setValues({...Values,submissionDate:e.target.value})}/>
                </div>
                <button className='btn btn-success'>Update</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Update