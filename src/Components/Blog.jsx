import React from 'react'
import Heading from './Heading'
import {blog} from './Data/Dummydata'
import img from "./Images/project.jpg"

const Blog = () => {
  return (
    <>
    <section className="blog">
    <div className="container">
    <Heading title='Blog'/>
    <div className="content grid3to1">
   
    {blog.map((item) => {
        return(
            <div className="box" data-aos="zoom-out-up">
            <div className="img">
            <img src={img} alt="hello" />
            </div>
            <div className="text">
            <h3>
            {item.title}
            </h3>
            <label > By {item.author} {item.date}</label>
            <p></p>
            </div>
            </div>
        )
    })}
    </div>
    </div>
    </section>
    </>
  )
}

export default Blog 