import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  console.log("recipes get request made");
  const allRecipes = await prisma.recipe.findMany();
  return NextResponse.json(allRecipes, { status: 200 });
}