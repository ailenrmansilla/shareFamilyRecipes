import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Recipe {
    id: string;
    name: string;
    description: string;
    ingredientList: string[];
    instructions: string[];
    imageURL: string;
    category: string[];
  }
  
  interface Props {
    recipeId: string;
  }


const SingleRecipe: React.FC<Props> = ({ recipeId }) => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchRecipe = async () => {
        try {
          const response = await fetch(`/api/recipes/${recipeId}`);
          if (!response.ok) {
            throw new Error('Recipe not found');
          }
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
    fetchRecipe();
    }, [recipeId]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!recipe) {
      return <div>Recipe not found</div>;
    }
  
    return (
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <Image
          src={recipe.imageURL}
          width={500}
          height={500}
          alt="Picture of the recipe"
        />
        <ul className="ingredientsList">
          {recipe.ingredientList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="instructions">
          {recipe.instructions.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="category">
          {recipe.category.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default SingleRecipe;
