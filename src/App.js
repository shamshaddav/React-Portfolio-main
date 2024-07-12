import React,{useEffect} from 'react'
import Pages from './Components/Pages'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
 AOS.init(
  AOS.refresh
 )
  }, [])
  
  return (
    <div>
     <Pages/>
    </div>
  )
}

export default App