import React from 'react'
import {Slide} from "react-slideshow-image"
import "./Sliderelement.css"
import 'react-slideshow-image/dist/styles.css'
const Sliderelement = () => {
  return (
    <div className='main-slideyboi'>
         <Slide>
            <div className='each-slide'>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/07bd6141e62cb34f.jpg?" alt="first"/>
            </div>
            <div className='each-slide'>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c2e216bca0d130ab.jpg?q=50"  alt="second"/>
            </div>
            <div className='each-slide'>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/99bd8d7ea433f9f8.jpg?q=50"  alt="third"/>
            </div>
            <div className='each-slide'>
                <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/fe9d8429f96b4c3a.jpg?q=50"  alt="fourth"/>
            </div>
        </Slide>

    </div>
  )
}

export default Sliderelement