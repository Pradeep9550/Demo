import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'





const Home = () => {
  const [search,setSearch] = useState("pizza");
  const [data,setData] = useState([]);
 

  const myfun =async ()=>{
    const get =await  fetch(`https://api.edamam.com/search?q=${search}&app_id=ed3063ae&app_key=1204511ecf466d6e3965a764399b9a12`)
    const jsonData =await get.json();
    // console.log(jsonData.hits)
    setData(jsonData.hits);
    
  }
  console.log(data)

  useEffect(()=>{
    myfun();
  },[]);

  const handleInput = (event)=>{
    setSearch(event.target.value)
  }

  
  
  return (
    <>
      <h1>hello</h1>
      <div className='container'>
        <div className='search'>
          <input type='text' placeholder='Enter Dishe' onChange={handleInput}></input>
          <button className='searchbutton' onClick={myfun}>Search</button>
        </div>
       <div className='cards'>
       {data.map((obj)=>{
        return(
          <div className='card'>
            <img src={obj.recipe.image} alt=''></img>
            <h3>{obj.recipe.label}</h3>
            
           
            
           <Link to={obj.recipe.url} >
           <button>Click me</button>
           </Link>
          

          </div>
        )
       })}
       </div>
      </div>
    </>
  )
}

export default Home

