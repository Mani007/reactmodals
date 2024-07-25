import React, { useState } from 'react'

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        
        setModal(!modal);
    }

    const modaldata = () => {
        return (
            <div>
                <h2>This is a modal</h2>
                <button onClick={toggleModal}>Close</button>
            </div>
        )
    }

  return (
    <>
    <button onClick={toggleModal}>Open Modal</button>
    </>
  )
}

export default Modal