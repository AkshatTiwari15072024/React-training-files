import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
    const[Values,setValues]=useState({
        id:'',
        author:'',
        issuingPerson:'',
        issueDate:'',
        submissionDate:''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/library', Values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a New Record</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='id'>Book ID</label>
                    <input type='text'name='id' className='form-control' placeholder='Enter Book ID'
                    onChange={e=>setValues({...Values,id:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='author'>Author</label>
                    <input type='text'name='author' className='form-control' placeholder='Enter Author Name'
                    onChange={e=>setValues({...Values,author:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='issuingPerson'>Issuing Person</label>
                    <input type='text'name='issuingPerson' className='form-control' placeholder='Enter Issuing Person'
                    onChange={e=>setValues({...Values,issuingPerson:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='issueDate'>Issue Date</label>
                    <input type='text'name='issueDate' className='form-control' placeholder='Enter Issue Date'
                    onChange={e=>setValues({...Values,issueDate:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='submissionDate'>Submission Date</label>
                    <input type='text'name='submissionDate' className='form-control' placeholder='Enter Submission Date'
                    onChange={e=>setValues({...Values,submissionDate:e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Create