import React, { useEffect, useState } from 'react'
import RecipeImg from '../../imgs/a9.jpeg'

export default function Recipecard({meal}) {

  
  return (
    // <>
    // <div className="card">
    //   <img src={meal.strMealThumb} alt={meal.strMeal} />
    //   <div className="card-body">
    //     <h5 className="card-title">{meal.strMeal}</h5>
    //     <p className="card-text">Meal ID: {meal.idMeal}</p>
    //   </div>
    // </div>
    // </>
    //& ====================> My Work <==========================
    <>
    <div className="card rounded-5 overflow-hidden">
      <img src={meal.strMealThumb} className="card-img-top rounded-bottom-5" 
      alt={meal.strMeal} />
      <div className="card-body p-4">
        <h5 className="fw-bold">{meal.strMeal}</h5>
        <p className="card-text">Meal ID: {meal.idMeal}</p>
      </div>
    </div>
    </>
  )
}
