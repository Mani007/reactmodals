import React, { useState } from 'react'
import Showmodal from './Showmodal';

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        //console.log(modal);
        setModal(!modal);
        //console.log(`Now the modal is ${modal}`);
    }

    // const Modaldata = () => {
    //     return (
            
    //     )
    // }

  return (
    <>
    <button onClick={toggleModal}>Open Modal</button>
    {modal && <Showmodal toggleModal={toggleModal}/>}
    </>
  )
}

export default Modal