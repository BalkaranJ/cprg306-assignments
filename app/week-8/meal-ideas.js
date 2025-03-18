"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ selectedItem }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Step 3: Define API Fetching Function
  const fetchMeals = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } catch (err) {
      throw new Error('Failed to fetch meal ideas');
    }
  };

  // Step 4: Define Load Function
  const loadMeals = async () => {
    if (!selectedItem) return;
    setLoading(true);
    setError(null);
    try {
      const mealsData = await fetchMeals(selectedItem);
      setMeals(mealsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch meals whenever the selected item changes
  useEffect(() => {
    loadMeals();
  }, [selectedItem]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Meal Ideas</h2>
      
      {loading && <p className="text-center">Loading meal ideas...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && meals.length === 0 && selectedItem && (
        <p className="text-center">No meal ideas found for {selectedItem}.</p>
      )}

      <ul className="divide-y divide-gray-300">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-2 text-center">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-md mb-2"/>
            <p className="font-semibold">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

