import { authHandler, loginIsRequiredServer } from "../../../lib/[...nextauth]";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
  await loginIsRequiredServer();

  const session = await getServerSession(authHandler);

//   const tweets = await prisma.tweet.findMany({ include: { author: true } });

//   await wait(1000);

  return (
    <>
      {session?.user?.name && <img src={session?.user?.image || "../../../public/randomprofile.jpg"} alt="user profile picture" />}
      <h1>This is your Information:</h1>
      <p>{session?.user?.name}</p>
      {/* {tweets.map((tweet: any, idx: number) => (
        <Tweet key={idx} tweet={tweet} />
      ))} */}

      {/* IMPORT RELATED RECIPES, PUBLIC OR PRIVATE. PLUS BUTTONS TO EDIT OR DELETE THEM */}
      {/* BUTTON TO ADD NEW RECIPE */}
    </>
  );
}