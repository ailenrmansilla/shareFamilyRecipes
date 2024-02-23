import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: any) {
const { id } = request.query;
  console.log("recipe get request made with id", id);
  try {
    // Fetch the recipe by ID
    const recipe = await prisma.recipe.findUnique({
      where: { id: String(id) } 
    });

    if (!recipe) {
        return {
            status: 404,
            body: "Recipe not found"
        };
    }

    return NextResponse.json(recipe, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return {
        status: 500,
        body: "Internal Server Error"
    };
  }
}