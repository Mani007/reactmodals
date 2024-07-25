import React, { useEffect } from 'react'

function Showmodal({toggleModal}) {
    useEffect(() =>{
        document.body.style.overflowY = 'hidden';
    },[])
  return (
    <>
    <div className='modal-wrapper' onClick={toggleModal}></div>
    <div className='modal-container'>
                <h2>This is a modal</h2>
                <button onClick={toggleModal}>Close</button>
    </div>
    </>
  )
}

export default Showmodal