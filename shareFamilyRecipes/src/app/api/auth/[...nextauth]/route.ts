import { authHandler } from "../../../../../lib/[...nextauth]";
import NextAuth from "next-auth/next";

const handler = NextAuth(authHandler);

export { handler as GET, handler as POST };