import React, { useState } from 'react'

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        console.log(modal);
        setModal(!modal);
        console.log(`Now the modal is ${modal}`);
    }

    const Modaldata = () => {
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
    {modal && <Modaldata/>}
    </>
  )
}

export default Modal