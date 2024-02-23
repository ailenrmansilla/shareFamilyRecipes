import { handleCreateRecipe } from "../app/api/post";
import prisma from "../../lib/prisma";
import { Prisma, Recipe, User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import React, { useState } from 'react';
import Router from 'next/router';

// async function saveRecipeToDB(data: Prisma.RecipeCreateInput) {
//   const newRecipe= await prisma.recipe.create({ data });

//   console.log("New Recipe Added: ", newRecipe);
// }

// interface AddRecipeProps {
//   user: User;
// }
// // EDIT THIS AND JUST USE THE HANDLE FUNCTION
// export const AddRecipe = ({ user }: AddRecipeProps) => {
//   // const [text, setText] = useState("");

//   //This a server action - works like standard HTML Form actions

//   // MOVE THIS TO THE API
  async function addRecipe(data: FormData) {
//     "use server";
//     const { id: userId, familyId } = user;

//     const newRecipeData: Prisma.RecipeCreateInput = {
//       name: data.get("name") as string,
//       description: data.get("description") as string,
//       ingredientsList: data.get("ingredients").split("."),
//       instructions: data.get("instructions").split("."),
//       imageURL: data.get('imageURL') as string,
//       public: data.get('public') as boolean,
//       category: data.get("instructions").split("."),
//       userId: {
//         connect: { id: userId },
//       },
//       familyId: {
//         connect: { id: familyId },
//       },
//     };

//     await saveRecipeToDB(newRecipeData);

//     revalidatePath(`/recipe/`);
//   }



  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState('');
  const [visibility, setVisibility] = useState('');
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, description, ingredients, instructions,imageURL, category, visibility};
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/recipes');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // We need onSubmit={submitData} AND submitData function
    
    <form className="addRecipeForm" onSubmit={submitData}>
      <h1>New Recipe</h1>
        <label className="formLabel">Recipe's Name</label>
        <input type="text" id="name" className="formInput" placeholder="World's best Lasagna"  name="name"/>
        <label className="formLabel">Description</label>
        <input type="text" id="description" className="formInput" placeholder="You'll love this recipe because..."  name="description"/>
        <label className="formLabel">Ingredients List</label>
        <p className="clarification">Please, separate each item with a period ' . '</p>
        <textarea className="formInput" id="ingredients" name="ingredients" placeholder='1 tomato paste can. 8oz ricotta cheese. 12 lasagna noodles...' cols={50} rows={10}></textarea>
        <label className="formLabel">Instructions List</label>
        <p className="clarification">Please, separate each step with a period ' . '</p>
        <textarea className="formInput" id="instructions" name="instructions" placeholder='Preheat oven at 350 F. Cook the meat thoroughly. Cook the noodles.' cols={50} rows={10}></textarea>
        <label className="formLabel">Include a picture URL</label>
        <input type="text" id="imageURL" className="formInput" placeholder="https://media.istockphoto.com/id/535851351/photo/lasagna-on-a-square-white-plate.jpg" name="imageURL"/>
        <label className="formLabel">Enter Recipe's Category</label>
        <p className="clarification">You can include more than one category. Please, separate each one with a period ' . '</p>
        <input type="text" id="category" className="formInput" placeholder="Dinner. Italian" name="category"/>
        <label className="formLabel">Choose if keep this recipe public or private:</label>
        <select id="visibility" className="formInput" name="visibility">
            <option value="true">Public</option>
            <option value="false">Private</option>
        </select>

        {/* <button type="submit" className="submitbtn">Create</button> */}
        <input disabled={!name|| !description} type="submit" value="Create Recipe" />
        <a className="back" href="#" onClick={() => Router.push('/')}>or Cancel</a>
    </form>
  );
};