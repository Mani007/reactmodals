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
    <button onClick={toggleModal} className='bg-slate-500 text-white'>Open Modal</button>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rem vitae qui asperiores sit dolores similique necessitatibus veritatis quidem corporis ab aperiam illum amet suscipit accusamus odio quia neque non! Quae, minima tenetur, fugit natus consequuntur quasi necessitatibus debitis quam quisquam labore deleniti dolore obcaecati praesentium, porro iste aperiam. Dolorem impedit nam itaque ratione temporibus consequatur praesentium suscipit nulla non. Laudantium unde voluptatem illum tempore quae cumque quia laborum soluta, ex a ullam corrupti debitis repellendus, iure quasi ab architecto rerum iste? Magni in asperiores ad corporis dignissimos quisquam! Nesciunt perspiciatis ipsum nulla voluptas sit facere doloremque magni ipsa atque!</p> <br /><br />

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rem vitae qui asperiores sit dolores similique necessitatibus veritatis quidem corporis ab aperiam illum amet suscipit accusamus odio quia neque non! Quae, minima tenetur, fugit natus consequuntur quasi necessitatibus debitis quam quisquam labore deleniti dolore obcaecati praesentium, porro iste aperiam. Dolorem impedit nam itaque ratione temporibus consequatur praesentium suscipit nulla non. Laudantium unde voluptatem illum tempore quae cumque quia laborum soluta, ex a ullam corrupti debitis repellendus, iure quasi ab architecto rerum iste? Magni in asperiores ad corporis dignissimos quisquam! Nesciunt perspiciatis ipsum nulla voluptas sit facere doloremque magni ipsa atque!</p> <br /><br />

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rem vitae qui asperiores sit dolores similique necessitatibus veritatis quidem corporis ab aperiam illum amet suscipit accusamus odio quia neque non! Quae, minima tenetur, fugit natus consequuntur quasi necessitatibus debitis quam quisquam labore deleniti dolore obcaecati praesentium, porro iste aperiam. Dolorem impedit nam itaque ratione temporibus consequatur praesentium suscipit nulla non. Laudantium unde voluptatem illum tempore quae cumque quia laborum soluta, ex a ullam corrupti debitis repellendus, iure quasi ab architecto rerum iste? Magni in asperiores ad corporis dignissimos quisquam! Nesciunt perspiciatis ipsum nulla voluptas sit facere doloremque magni ipsa atque!</p> <br /><br />  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, rem vitae qui asperiores sit dolores similique necessitatibus veritatis quidem corporis ab aperiam illum amet suscipit accusamus odio quia neque non! Quae, minima tenetur, fugit natus consequuntur quasi necessitatibus debitis quam quisquam labore deleniti dolore obcaecati praesentium, porro iste aperiam. Dolorem impedit nam itaque ratione temporibus consequatur praesentium suscipit nulla non. Laudantium unde voluptatem illum tempore quae cumque quia laborum soluta, ex a ullam corrupti debitis repellendus, iure quasi ab architecto rerum iste? Magni in asperiores ad corporis dignissimos quisquam! Nesciunt perspiciatis ipsum nulla voluptas sit facere doloremque magni ipsa atque!</p> <br /><br />
    
    
    {modal && <Showmodal toggleModal={toggleModal}/>}
    </>
  )
}

export default Modal