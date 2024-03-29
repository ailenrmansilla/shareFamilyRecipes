// import React from "react"
// import { GetStaticProps } from "next"
// import Layout from "../ui/Layout"

// export default function Page(){
//   return(
//     <main>
//       <p>Home page</p>
//     </main>
//   )
// }

// import Post, { PostProps } from "../ui/Post"

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = [
//     {
//       id: "1",
//       title: "Prisma is the perfect ORM for Next.js",
//       content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
//       published: false,
//       author: {
//         name: "Nikolas Burk",
//         email: "burk@prisma.io",
//       },
//     },
//   ]
//   return { 
//     props: { feed }, 
//     revalidate: 10 
//   }
// }

// type Props = {
//   feed: PostProps[]
// }

// const Blog: React.FC<Props> = (props) => {
//   return (
//     <Layout>
//       <div className="page">
//         <h1>Public Feed</h1>
//         <main>
//           {props.feed.map((post) => (
//             <div key={post.id} className="post">
//               <Post post={post} />
//             </div>
//           ))}
//         </main>
//       </div>
//     </Layout>
//   )
// }

// export default Blog
