import React,{useRef} from 'react'
import Heading from './Heading'
import {contact} from './Data/Dummydata'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
 
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_8mimbc4', 'template_7stf43v', form.current, 'xlMlRfrP3inyd0PZn')
       .then((result) => {
           console.log(result.text);
           console.log("message sent")
           e.target.reset();
       }, (error) => {
           console.log(error.text);
       });
   };
  return (
   <>
   <div className="contact" >
   <div className="container">
   <Heading title = 'Keep In Touch' />
   <div className="content flexsb">
   <div className="right">
   <form ref={form} onSubmit={sendEmail}>
   <div className="flex">
   <input type="text" placeholder='Name' data-aos="zoom-in-down" name='user_name' />
   <input type="email" placeholder='Email' data-aos="zoom-in-up" name='user_email' />
   </div>
   <input type="text" placeholder='Subject' data-aos="zoom-in-up" name='subject' />
   <textarea  cols="30" rows="10" data-aos="zoom-in-down" name='message' ></textarea>
   <button type='submit'> Submit</button>

   </form>
   </div>
   <div className="left">
   {contact.map((item) => (
    <div className="box" data-aos="zoom-out-down">
    <i id='icon' >{item.icon}</i>
    <p>{item.text1}</p>
    <p>{item.text2}</p>
    </div>
   ))}
   </div>
   </div>
   </div>
   </div>
   </>
  )
}

export default Contact