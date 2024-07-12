import React from 'react'
import { about } from './Data/Dummydata'
import Heading from './Heading'
import phot from './Data/Images/1234.png'



const About = () => {
  return (
    <>
    <section className="about container">
    
    <div className="content flex">
{about.map((val,i) => (
<>
<div className="left">
<img id='picture' style={{width:"25rem", height:"25rem"}} src={phot} alt="" data-aos="fade-down-right"
     data-aos-duration="1000" />
</div>
<div className="right" data-aos="fade-down-left"
data-aos-duration="1000">
<Heading title = "About Me"/>
<p>{val.desc}</p>
<p>{val.desc1}</p>

<a href='resume.pdf' download="resume.pdf">
<button style={{float: 'left'}} className='primaryBtn yellowhover' data-aos="fade-up"
data-aos-duration="1500">Download Resume</button>
</a>
</div>
</>
  ))}

    </div>
    </section>
    </>
  )
}

export default About