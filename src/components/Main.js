import React,{useEffect, useState} from 'react'
import MainHeader from "./MainHeader"
import ApiHeader from "./ApiHeader"
import Footer from './Footer'

export default function Main() {

    const [togri, setTogri] = useState(false)
    // const [notogri, setNotogri] = useState(false)

  return (
    <div>
        <div className='container my-3'>
        <div className='d-flex mb-3'>
        <h2>What's Popular</h2>
        <button onClick={() => setTogri(false)} className='btn btn-primary ms-3 dumaloq'>On TV</button>    
        <button onClick={() => setTogri(true)} className='btn btn-success'>In Theaters</button>    
        </div>
        {
            (togri)?
            <MainHeader/>
            :
            <ApiHeader/>
        }
        </div>
          <Footer/>
    </div>
  )
}
