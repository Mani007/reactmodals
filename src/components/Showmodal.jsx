import React from 'react'

function Showmodal({toggleModal}) {
  return (
    <>
    <div className='modal-wrapper'></div>
    <div className='modal-container'>
                <h2>This is a modal</h2>
                <button onClick={toggleModal}>Close</button>
    </div>
    </>
  )
}

export default Showmodal