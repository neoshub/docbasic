import React from 'react';
import './Response.css';

const Parameters = () => {
  
  return (
    <div className='parameters-container'>
      <div className='parameters-header'>
        <div className='parameters-example'>Parameters</div>
      </div>
      <div className='parameters-text'>
        Authorization : <input type='text' placeholder='string' className='text-field' />
        <button className='button-class'>Send API Request</button>
      </div>
    </div>
  );
};

export default Parameters;