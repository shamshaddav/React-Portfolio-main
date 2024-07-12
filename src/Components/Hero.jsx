
import React from 'react'
import {home} from "./Data/Dummydata"
import Typewritter from "typewriter-effect"


const Hero = () => {
 
  return (
    
    <>
    <section className="hero">
    {home.map((val,i) => 
        <div className='heroContent' >
        <h3 data-aos="fade-right"
     data-aos-duration="900" >{val.text}</h3>
        <h1 className='iconred' >
       <Typewritter className="typewritter" options =  {{ strings: [ `${val.name}`, `${val.post}`, `${val.design}`, `${val.skills}`, `${val.basic}` , `${val.basic2}` , `${val.basic3}`],
      autoStart: true, loop:true 
      }} />
        </h1>
        <p data-aos="fade-left"
     data-aos-duration="1000" style={{textAlign: 'center'}} >{val.desc}</p>
     <a href='resume.pdf' download="resume.pdf">
     <button className='primaryBtn yellowhover' data-aos="fade-up"
     data-aos-duration="1500">Download Resume</button>
</a>
     
        </div>
        )}
    </section>
    </>
  )
}

export default Hero