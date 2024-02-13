import React from 'react'
import "./styles/style.css"

function Table() {
  return (
    <>
    <div className="container">
       <div className="table">
        <div className="field-row  page-row">
          <div className='field-name'>Title</div>
          <div className='field-name'>Description</div>
          <div className='field-name'>Owner</div>
          <div className='field-name'>Status</div>
          <div className='field-name'>Start-Date</div>
          <div className='field-name'>Due-Date</div>
          <div className='field-name'>Priority</div>
          <div className='field-name'>Comment</div>
        </div>
       </div>
    </div>
      
    
    </>
  )
}

export default Table