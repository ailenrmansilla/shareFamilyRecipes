import { getSession } from 'next-auth/react';
import prisma from '../../../../lib/prisma';
import { Prisma, Recipe, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

// POST /api/post
//  handler function for any requests coming in at the /api/post/ route

export async function handleCreateRecipe(req: NextApiRequest, res: NextApiResponse) {
  const { name, description, ingredients, instructions, imageurl, category, visibility} = req.body;
  const session = await getSession({ req });
  // const userId = session?.user?.id;


  const result = await prisma.recipe.create({
    data: {
        name: name,
        description: description,
        ingredientList: ingredients,
        instructions: instructions,
        imageURL: imageurl,
        public: visibility,
        userId: '1', // Use the retrieved user ID here
//       userId: {
//         connect: { id: userId },
//       }
//       familyId: {
//         connect: { id: familyId },
//       },
        familyId: '10', // Include familyId if provided
        category: category, 
    //   author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}