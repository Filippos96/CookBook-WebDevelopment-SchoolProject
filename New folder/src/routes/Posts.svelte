<script>
    import NewRecipeForm from "../lib/NewRecipeForm.svelte";

    

    let recipes = [
        {title: "pancake", ingredient: "yes", directives: "haha"}
    ] 

    const createRecipe = (e) => {
        console.log(e.detail)
        const recipe = e.detail;
        recipes = [recipe, ... recipes]
    }

</script>

<div class="posts">

    <div class="image">
    Image. Top.
    </div>

    <NewRecipeForm on:createRecipe={createRecipe}/>
    {#each recipes as recipe}
        <p>{recipe.title}</p>
        <div class="recipe-body">
            <div class="in gredients">
                {recipe.ingredient}
            </div>
            <div class="instructions">
                {recipe.directives}
            </div>
        </div>
    {/each}
    

</div>

<style>

    .posts {
        margin-left: 250px;
        margin-top: 0px;
    }

    /*
    .posts {
        background: green;
        margin-left: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;       
    }

    .image {
        width: 100%;
        text-align: center;
        padding: 20px 0px;
        background-color: blue;
    }

    .recipe-body {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 20px;
    }

    .ingredients, .instructions {
        width: 45%;
        text-align: center;
        padding: 20px;
        background-color: blue;
    }
*/
</style>