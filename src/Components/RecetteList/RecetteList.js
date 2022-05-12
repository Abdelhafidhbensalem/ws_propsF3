import React from 'react'
import RecetteCard from '../RecetteCard/RecetteCard'

const RecetteList = ({recipes,Alertitle}) => {

  return (
      
    <div><h1>RecetteList</h1>
{    recipes.map(el=>  


<RecetteCard recette={el}  Alertitle={Alertitle}/>)
}    </div>
  )
}

export default RecetteList