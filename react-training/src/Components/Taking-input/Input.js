import React from 'react';
import './Input.css';

const Takinginput = () => {
    return(
        <div className='Taking-input-container'>
            <input placeholder='Book-ID' className='id-input'/>
            <input placeholder='Author' className='id-input'/>
            <input placeholder='Issuing-person' className='id-input'/>
            <input placeholder='Issuing-date' className='id-input'/>
            <input placeholder='Submission-date' className='id-input'/>
            <button className='button'>Add new Row</button>
        </div>

    );
};

export default Takinginput;