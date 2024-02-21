// import { getSession } from 'next-auth/react';
// import prisma from '../../../lib/prisma';
// import { NextApiRequest, NextApiResponse } from 'next';

// // POST /api/post
// // initial db population

// export default async function Populate() {
//   const createRecipes = await prisma.recipe.createMany({
//     data: [{
//         name: 'Lasagna',
//         description: 'This lasagna recipe takes a little work, but it is so satisfying and filling that it is worth it!',
//         ingredientList: ['1 pound sweet Italian sausage','¾ pound lean ground beef','½ cup minced onion','2 cloves garlic', '28 ounce can crushed tomatoes', '6.5 ounce cans canned tomato sauce', '6 ounce cans tomato paste', '½ cup water', '2 tablespoons white sugar', '4 tablespoons chopped fresh parsley, divided', '1 ½ teaspoons dried basil leaves', '1 ½ teaspoons salt', '1 teaspoon Italian seasoning','¼ teaspoon ground black pepper', '12 lasagna noodles', '16 ounces ricotta cheese', '1 egg', '¾ pound mozzarella cheese, sliced', '¾ cup grated Parmesan cheese'],
//         instructions: ['Gather all your ingredients.', 'Cook sausage, ground beef, onion, and garlic in a Dutch oven over medium heat until well browned.', 'Stir in crushed tomatoes, tomato sauce, tomato paste, and water. Season with sugar, 2 tablespoons parsley, basil, 1 teaspoon salt, Italian seasoning, fennel seeds, and pepper. Simmer, covered, for about 1 ½ hours, stirring occasionally.', 'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water.', 'In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, and 1/2 teaspoon salt.', 'Preheat the oven to 375 degrees F (190 degrees C).', 'To assemble, spread 1 ½ cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce, overlapping slightly. Spread with 1/2 of the ricotta cheese mixture. Top with 1/3 of the mozzarella cheese slices. Spoon 1 ½ cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese.', 'Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray or make sure the foil does not touch the cheese.', 'Bake in the preheated oven for 25 minutes. Remove the foil and bake for an additional 25 minutes.', 'Rest lasagna for 15 minutes before serving.'],
//         imageURL: 'https://media.istockphoto.com/id/535851351/photo/lasagna-on-a-square-white-plate.jpg?s=612x612&w=0&k=20&c=Rg1K7z4NlWhy2qexaym_GJ0khcJFSJUJgToTN2cRspM=',
//         public: true,
//         category: ['dinner'], 
//         userId: '1', 
//         familyId: '10',
//     },
//     {
//         name: 'Old-Fashioned Beef Stew',
//         description: 'This classic French beef stew is the ultimate cold weather comfort food. After a few hours in the oven, the meat becomes meltingly tender and enveloped in a rich wine sauce.',
//         ingredientList: ['3 pounds boneless beef chuck (well-marbled), cut into 1½-inch pieces','2 teaspoons salt','1 teaspoon freshly ground black pepper','3 tablespoons olive oil','2 medium yellow onions, cut into 1-inch chunks','7 cloves garlic, peeled and smashed','2 tablespoons balsamic vinegar','1½ tablespoons tomato paste','¼ cup all-purpose flour', '2 cups dry red wine', '2 cups beef broth', '2 cups water','1 bay leaf','½ teaspoon dried thyme','1½ teaspoons sugar', '4 large carrots, peeled and cut into 1-inch chunks', '1 pound small white boiling potatoes (baby yukons), cut in half', 'Fresh chopped parsley, for serving '],
//         instructions: ['Preheat the oven to 325°F and set a rack in the lower middle position.','Pat the beef dry and season with the salt and pepper. In a large Dutch oven or heavy soup pot, heat 1 tablespoon of the olive oil over medium-high heat until hot and shimmering. Brown the meat in 3 batches, turning with tongs, for about 5 minutes per batch; add one tablespoon more oil for each batch. Transfer the meat to a large plate and set aside.',
//         'Add the onions, garlic and balsamic vinegar; cook, stirring with a wooden spoon and scraping the brown bits from bottom of the pan, for about 5 minutes. Add the tomato paste and cook for a minute more. Add the beef with its juices back to the pan and sprinkle with the flour. Stir with wooden spoon until the flour is dissolved, 1 to 2 minutes. Add the wine, beef broth, water, bay leaf, thyme, and sugar. Stir with a wooden spoon to loosen any brown bits from the bottom of the pan and bring to a boil. Cover the pot with a lid, transfer to the preheated oven, and braise for 2 hours.',
//         'Remove the pot from the oven and add the carrots and potatoes. Cover and place back in oven for about an hour more, or until the vegetables are cooked, the broth is thickened, and the meat is tender.', 
//         'This stew improves in flavor if made at least 1 day ahead. Reheat, covered, over medium heat. Garnish with fresh parsley, if desired.'],
//         imageURL: 'https://media.istockphoto.com/id/1291008402/photo/beef-stew-with-carrot-and-baby-potato-in-black-plate-on-wooden-table.jpg?s=612x612&w=0&k=20&c=TGUFmSK8_Bnq5pd6-jsfMMNq_1c8CIS2EcRu5axMC2s=',
//         public: true,
//         category: ['dinner', 'stew'], 
//         userId: '1', 
//         familyId: '10', 
//     }]
//   });
//   res.json(result);
}