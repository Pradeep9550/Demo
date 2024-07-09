import React from 'react'
import { Link, useLocation } from 'react-router-dom';






const SignleRecipe = () => {
    let location = useLocation()
    console.log(location)
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.label)

  return (
    <div>
         
        
        <div className='container1'>

                <div className="img">
                    <img className='' src={location.state.recipe.image} alt="" />
                </div>

                <div className="title">
                    <h3>Title: {location.state.recipe.label}</h3>
                    <h4>Meal type: {location.state.recipe.mealType}</h4>

                        <div className="">
                            <div className="">
                            <p>{location.state.recipe.totalNutrients.CA.label}</p>
                            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>
                            </div>
                            <div className="">
                            <p>{location.state.recipe.totalNutrients.FAT.label}</p>
                            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>
                            </div>
                            <div className="">
                            <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
                            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>
                            </div>
                            <div className="">
                            <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
                            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>                           </div>
                        </div>

                        <Link  to={location.state.recipe.url} className=''> How to make</Link>
                   
                </div>
        </div>

        <div className="">
            <div className="">
                <h1>Health labels</h1>
                <ul>
                    {location.state.recipe.healthLabels.map((obj)=>{
                        return <li>{obj}</li>
                    })}
                </ul>
            </div>
            <div className="">
                <h1>Ingredients</h1>
                <ul>
                    {location.state.recipe.ingredientLines.map((obj)=>{
                        return <li>{obj}</li>
                    })}
                </ul>
            </div>
          
        </div>
    
    </div>
  )
}

export default SignleRecipe;