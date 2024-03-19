"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ingredient}) 
{
  const [meals, setMeals] = useState([]);
  const [info, setInfo] = useState("Select an item to see meal ideas.");

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  }

  useEffect(() => 
    {
        loadMealIdeas();
        if (ingredient !== null)
        {
            setInfo("No meal ideas found for "+ingredient);
        }
    }, [ingredient]);

  return (
    <main>
        <div className=" p-2 m-2 mt-6 ">
            <p className="text-xl font-bold mb-2">Meal Ideas</p>
            <ul>
                {meals === null ?  <li>{info}</li> :
                meals.map((meal) => (
                <li className=" bg-mute p-0.5 m-1 ml-0 w-80 border-2 border-black border-opacity-50" key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                </li>
                ))}
            </ul>
        </div>
    </main>
  );
}