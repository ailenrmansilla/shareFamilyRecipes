// discover page
import Link from 'next/link';
import RecipesGrid from '../../ui/recipes-grid';

export default async function Page(){
    // import grid with all the available recipes
    return(
        <div>
        <h1>All recipes</h1>
        <RecipesGrid />
        </div>
    );
}