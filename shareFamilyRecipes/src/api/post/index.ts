import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// POST /api/post
//  handler function for any requests coming in at the /api/post/ route

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, ingredients, instructions, imageurl, publicrecipe, familyId, categories,} = req.body;

  const session = await getSession({ req });
//   const userId = session?.user?.id;
  const result = await prisma.recipe.create({
    data: {
        name: title,
        description: content,
        ingredientList: ingredients,
        instructions: instructions,
        imageURL: imageurl,
        public: publicrecipe,
        userId: '1', // Use the retrieved user ID here
        familyId: familyId, // Include familyId if provided
        category: categories, 
    //   author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}