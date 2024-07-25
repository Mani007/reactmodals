import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
function Showmodal({toggleModal}) {
    useEffect(() =>{
        document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'auto'; // when component unmounts, restore scroll a.k.a as cleanup function 
    },[])
  return ReactDOM.createPortal(
    <>
    {/* <div className='testing'> */}

    <div className='modal-wrapper' onClick={toggleModal}></div>
    <div className='modal-container'>
                <h2>This is a modal</h2>
                <button onClick={toggleModal}>Close</button>
    </div>
    {/* </div> */}
    </>, 
    document.getElementById('modal-part') // Location where in the DOM the modal is located
  )
}

export default Showmodal