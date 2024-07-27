import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
function Showmodal({toggleModal}) {

  const modalref = useRef(null)

    useEffect(() =>{
        document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'auto'; // when component unmounts, restore scroll a.k.a as cleanup function 
    },[])
  return ReactDOM.createPortal(
    <>
    {/* <div className='testing'> */}
    <div ref={modalref} onMouseEnter={(clientX) =>{
      console.log(clientX)
      // if(clientX > modalref.current.offsetLeft + modalref.current.clientWidth/2){
      //   console.log('right');
      // }else{
      //   console.log('left');
      // }
    }}>
    <div  className='modal-wrapper' onClick={toggleModal}></div>
    <div className='modal-container'>
                <h2>This is a modal</h2>
                <button onClick={toggleModal}>Close</button>
    </div>
    </div>
    {/* </div> */}
    </>, 
    document.getElementById('modal-part') // Location where in the DOM the modal is located
  )
}

export default Showmodal