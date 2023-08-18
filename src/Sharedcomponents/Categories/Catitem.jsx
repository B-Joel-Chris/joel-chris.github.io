
import React from 'react'
import './catitem.css'

let titles = new Array;
let imgz = new Array;
let pricez = new Array;



const Catitem = (...data) => {
  titles.length = 0;
  data?.map((x,i)=>{
    
    let y = x.data;
    y?.map((k,i)=>{
      // newobject = {
      //   titlee: k.title,
      //   imgg: k.image,
      //   pricee: k.price
      // };
       titles[i] = k.title;
      imgz[i] = k.image;
      pricez[i] = k.price;

      console.log(k.title)
      
    })

    
  }
    
  )

return(
  titles?.map((x,i)=>{
    return(<div className='item-container'><img src={`${imgz[i]}`}/><p className='title'>{x}</p><p className='price'>$ {pricez[i]}</p></div>)
  }
  
  )
)
}

export default Catitem