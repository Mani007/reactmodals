import React from 'react'

function Showmodal({toggleModal}) {
  return (
    <>
    <div>
                <h2>This is a modal</h2>
                <button onClick={toggleModal}>Close</button>
            </div>
    </>
  )
}

export default Showmodal