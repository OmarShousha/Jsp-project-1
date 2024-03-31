import React from 'react';
import { useEffect, useState } from 'react'
// import RecipeImg from '../imgs/a9.jpeg';
import Recipecard from './Recipecard/Recipecard';

export default function Recipes() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <>
    <section id='Recipes' className='recipes'>
      <div className="container">
        

        <div className="row justify-content-center align-items-center">
          <h1 className='recipes-title text-center my-5 pt-4 mt-lg-3'>RECIPES</h1>
          {meals.map((meal) => (
            <>
            <div className="col-md-6 col-lg-4">
              <div className='p-4'>
                <Recipecard key={meal.idMeal} meal={meal} />
              </div> 
            </div>
            </>
          ))}
          <div className='d-flex justify-content-center mt-3 mb-5'>
            <button className="btn btn-yellow">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}