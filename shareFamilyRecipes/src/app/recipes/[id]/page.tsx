import SingleRecipe from "../../../ui/recipe";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    <SingleRecipe recipeId={id}/>
}
