
import React , {useState} from 'react'
import {Visibility} from "@mui/icons-material"
import {portfolio} from "./Data/Dummydata"



import Heading from './Heading'

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]
const PortFolio = () => {
    const [list, setlist] = useState(portfolio)
    const [category, setcategory] = useState(allCategory)
    const filterItems = (category) => {
        const newItem = portfolio.filter((item)=> item.category ===category)
        setlist(newItem)

        if(category === "all"){
            setlist(portfolio)
        }
    }
  return (
    <>
    <article className='portfolio'>
    <div className=" container">
    <Heading title = "Projects"/>
    <div className="catButton  grid3 grid1">

    {category.map((category, index) =>(
        <button key={index} data-aos="zoom-out-down" className="primaryBtn yellowhover catbtn" onClick={() => filterItems(category)}>{category}</button>
    ) )}
    </div>
    <div className="content grid3to1">
    

    {list.map((items) => (
      <a   href={`${items.link}`} target="_blank" rel="noopener noreferrer">
    <div className="box" data-aos="zoom-out-up">
    <div className="img">
    <img src={require(`${items.cover}`)} alt="heell"  />
    </div>
    <div className="overlay">
    <h3>{items.title}</h3>
    <span>{items.name}</span>
    <Visibility/>

  
    
    <button style={{marginTop: '3px'}}>{items.button}</button>
    <p>{items.warn}</p>
 
  

    </div>
    </div>
    </a>
    )
    )
  
  }

    </div>
    </div>
    </article>
    </>
  )
}

export default PortFolio