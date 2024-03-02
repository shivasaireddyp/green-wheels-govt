import React,{useState} from 'react'
import { Outlet } from 'react-router'

 


function AnantagiriHills() {
    const features = 

    {
        "count":10000,
        "Month":6,
        "GDP":2.5
    }
    let [visitor,setVisitor] = useState({
        count:0,
        Revenue:0,
        GDP:0
    });
    let showVisitor = () => {
        setVisitor({
            ...visitor,
            count:10000,
            Revenue:345700,
            GDP:3.4
        })
    }
  return (
    <div>
        <h2 className='text-center text-white'>Anantagiri Hills</h2>
        <div className='btn1'>
            <h1> Visitor Count: {visitor.count}</h1>
            <h1> Revenue: {visitor.Revenue}</h1>
            <h1> GDP: {visitor.GDP}</h1>
            <button onClick={showVisitor}>Predict</button>
        </div>
    </div>
  )
}

export default AnantagiriHills