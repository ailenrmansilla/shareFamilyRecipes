import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Removed NextApiRequest and NextApiResponse imports

async function getInitialProps() {
  const response = await fetch('/api/recipes');
  if (!response.ok) {
    throw new Error(`Error fetching recipes: ${response.status}`);
  }
  const data = await response.json();
  return { data };
}

export default function RecipesGrid({ data }) {
  
  return (
    <div>
      {data.map((recipe) => (
        <Link key={recipe.id} href={`recipes/${recipe.id}`}>
          <div>
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
            <Image
              src={recipe.imageURL}
              width={500}
              height={500}
              alt="Picture of the recipe"
            />
            <ul className="ingredientsList">
              {recipe.ingredientList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="instructions">
              {recipe.instructions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="category">
              {recipe.category.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

RecipesGrid.getInitialProps = getInitialProps;

// // use client
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { NextApiRequest, NextApiResponse } from 'next';

// // async function getRecipes(){
// //     const res = await fetch('/api/recipes/');
// //     if (!res.ok){
// //         console.log(res)
// //     }
// //     return res.json();
// // }

// async function getRecipes(){
//   const [recipes, setRecipes] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response: any = await fetch('/api/recipes');
//           const data = await response.json();
//           setRecipes(data);
//         } catch (error) {
//           console.error('Error fetching recipes:', error);
//         }
//       };
    
//       fetchData();
//     }, []);
//     return recipes;
// }

// export default async function RecipesGrid(){
    

//     const data: {id: string, name: string, description: string, ingredientList: string[], instructions: string[], imageURL: string, public: boolean, category: string[], userId: string, familyId: string}[] = await getRecipes();
//     return (
//         <div>
//           {data.map((recipe) => (
//             <Link key={recipe.id} href={`recipes/${recipe.id}`}>
//                 <div>
//                     <p>{recipe.name}</p>
//                     <p>{recipe.description}</p>
//                     <Image
//                     src={recipe.imageURL}
//                     width={500}
//                     height={500}
//                     alt="Picture of the recipe"
//                     />
//                     <ul className= "ingredientsList">
//                     {recipe.ingredientList.map((item) => 
//                     (<li>{item}</li>))
//                     }
//                     </ul>
//                     <ul className= "instructions">
//                     {recipe.instructions.map((item) => 
//                     (<li>{item}</li>))
//                     }
//                     </ul>
//                     <ul className= "category">
//                     {recipe.category.map((item) => 
//                     (<li>{item}</li>))
//                     }
//                     </ul>
//                 </div>
//             </Link>
//           ))}
//         </div>
//       );
// }