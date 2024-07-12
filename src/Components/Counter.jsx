import React  from 'react'
import { project } from './Data/Dummydata'

import CountUp from "react-countup"

const Counter = () => {

  return (
    <>
  <div className=" counter grid3 grid5  ">
  
 
  { project.map((item,i) => (
    <div className=" box" data-aos="zoom-in-up" >
    <i id='icon' >{item.icon}</i>
    <h1 className='heading'>
    <CountUp enableScrollSpy duration={2} end = {item.num} />{"+"}
    </h1>
    <h3>{item.title}</h3>
    </div>
  
  ))}
  </div>


    </>
  )
}

export default Counter