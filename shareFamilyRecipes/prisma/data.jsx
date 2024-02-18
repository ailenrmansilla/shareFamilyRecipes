// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default async function handler(req, res) {
//   try {
//     // Data to insert
//     const users = [
//       { firstName: 'Alice', lastName: 'Smith', email: 'alice@mail.com', description: 'Mom of two, living in Texas. I love cooking', country: 'United States'}
//     ]

//     // Insert data into the database
//     for (const user of users) {
//       await prisma.user.create({
//         data: user,
//       })
//     }

//     res.status(200).json({ message: 'Database populated successfully' })
//   } catch (error) {
//     console.error('Error populating database:', error)
//     res.status(500).json({ message: 'Failed to populate database' })
//   } finally {
//     await prisma.$disconnect()
//   }
// }
