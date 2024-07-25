import React, { useEffect } from 'react'

function Showmodal({toggleModal}) {
    useEffect(() =>{
        document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'auto'; // when component unmounts, restore scroll a.k.a as cleanup function 
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