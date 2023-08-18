import React,{createContext, useEffect, useState} from 'react'
import axios from 'axios'
import Catitem from './Catitem'
import './categories.css'

const url = "https://fakestoreapi.com/products"



const Cats = (cateitem) => {
    let itm = cateitem
    let itmtxt = itm.cateitem
     

    const [myCats, setMyCats]  = useState()
    
    const catdata = async () =>{
        const prod = await axios.get(url)
        setMyCats(prod.data.filter(x=>x.category === itmtxt))
        console.log(myCats)
    }

    useEffect(()=>{catdata()},[])
    
  return (
      
     <div className='maincontainer-cats'>
      <div className='category-name'><p>Best of<br/>{itmtxt}</p><button className='viewall-btn'>View All</button></div>
      <Catitem data={myCats}/>
     </div>
     
    //<img src = {x.image}/>>
  )
}

export default Cats