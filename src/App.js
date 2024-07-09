import React from 'react'

import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import SignleRecipe from './components/SignleRecipe'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/single' element={<SignleRecipe/>}/>
    
    
   </Routes>
  )
}

export default App



