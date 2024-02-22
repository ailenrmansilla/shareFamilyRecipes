// import prisma from "../../lib/prisma.ts";

// export default async function handler(req, res) {
//     if (req.method === "POST") {
//       const { id, firstName, lastName, email, emailVerified, image, accounts, sessions, familyId} =
//         typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  
//       try {
//         // we can access db records with prisma functions
//         const newUser = await prisma.user.create({
//           data: {
//             id,
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             emailVerified: emailVerified,
//             image: image,
//             accounts: accounts,
//             sessions: sessions,
//             familyId:familyId
//           },
//         });
//         res.status(200).json({ newUser });
//       } catch (e) {
//         res.status(500).json(e);
//       }
//     }
//   }