import React, { useContext } from 'react'
import './Productpage.scss'
import { TextField } from '@mui/material'

const Productpage = () => {

  
  return (
    <div className='maincontainer'>
      <div className='productpage'>
        <div className='productpage__productdisplay'>
          <img loading="eager" class="_396cs4 _2amPTt _3qGmMb" alt="SONY ZV-E10L Mirrorless Camera Body with 1650 mm Power Zoom Lens Vlog Camera" src="https://rukminim1.flixcart.com/image/416/416/ktszgy80/dslr-camera/t/a/x/alpha-zv-e10-24-2-megapixel-with-interchangeable-lens-aps-c-original-imag72h2nkzz5rfd.jpeg?q=70" srcset="https://rukminim1.flixcart.com/image/832/832/ktszgy80/dslr-camera/t/a/x/alpha-zv-e10-24-2-megapixel-with-interchangeable-lens-aps-c-original-imag72h2nkzz5rfd.jpeg?q=70 2x, https://rukminim1.flixcart.com/image/416/416/ktszgy80/dslr-camera/t/a/x/alpha-zv-e10-24-2-megapixel-with-interchangeable-lens-aps-c-original-imag72h2nkzz5rfd.jpeg?q=70 1x" />

        </div>
        <div className='productpage__productdetails'>
          <div className='productpage__productdetails--title'></div>
          <div className='productpage__productdetails--ratings'>211 Ratings and 31 Reviews</div>
          <div className='productpage__productdetails--price'>₹61,490</div>
          <div className='productpage__productdetails--offers'>
            <div className='productpage__productdetails--offers--offerlist'>
              <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT</p>
              <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT</p>
              <p>Bank Offer5% Cashback on Flipkart Axis Bank CardT</p>
            </div>
          </div>
          <div className='productpage__higlights'>
            <div className="productpage__highlights--delivery">
              <div className="productpage__highlights--delivery--field1"><span className="productpage__highlights--delivery--field1--span">Delivery</span><TextField variant='standard' size='small' margin='none' label="Enter Delivery Pincode" InputLabelProps={{style:{fontSize:11}}}/></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Productpage