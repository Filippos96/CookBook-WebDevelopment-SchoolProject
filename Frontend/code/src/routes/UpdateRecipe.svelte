<script>

    import { Link } from "svelte-routing";

    export let id
    let isFetchingRecipe = true
    let failedToFetchRecipe = false
    let recipe = null
    let hasUpdatedCorrectly = false

    let title = ""
    let ingredients = ""
    let directives = ""
    let errorCodes = []

    async function loadRecipe(){
        
        try {

            const response = await fetch("http://localhost:8080/recipes/"+id)

            switch(response.status) {

                case 200:
                    isFetchingRecipe = false
                    recipe = await response.json()
                    recipe = recipe[0]
                    title = recipe.title
                    ingredients = recipe.ingredients
                    directives = recipe.directives
                 //   loadRecipeComments()
                    break
                
                case 404:
            }
        } catch(error) {

            isFetchingRecipe = false
            failedToFetchRecipe = true

        }
    }

loadRecipe()

async function updateRecipe() {

    const recipe = {
        title,
        ingredients,
        directives,
    }

    try {
        const response = await fetch("http://localhost:8080/recipes/"+id, {
            method: 'PUT',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe),
        });
        
        switch(response.status) {

            case 200:
                hasUpdatedCorrectly = true
            break;

            case 400:
                errorCodes = await response.json()
            break;

        }

    } catch(errror) {
        errorCodes.push("COMMUNICATION_ERROR")
    }

}

</script>

<div class="everything">

    <h1>Update Recipe</h1>
    {#if isFetchingRecipe}
        <p>Wait, I'm fetching data...</p>
    {:else if failedToFetchRecipe}
        <p>Couldnt fetch the recipe. Check your internet connection.</p>
    {:else if hasUpdatedCorrectly}
        <p>Updated recipe!</p>
    {:else if recipe}
        <form on:submit|preventDefault={updateRecipe}>
            <label for="title">Title: </label>
            <input type="text" bind:value={title}>
            <label for="ingredients">Ingredients: </label>
            <input type="text" bind:value={ingredients}>
            <label for="directives">Directives: </label>
            <textarea id="directives" name="directives" rows="4" cols="50" bind:value={directives}></textarea>
            <input type="submit" value="Update Recipe">
        </form>
    {:else}
        <p>No recipe with the given id {id}</p>
    {/if}
</div>

<style>
    .everything {
     margin-left: 300px;
     color: black;
   }
 </style>

<!--
    <form on:submit|preventDefault={updateRecipe}>
            <label for="title">Title: {title}</label>
            <input type="text" bind:value={title}>
            <label for="ingredients">Ingredients: {ingredients}</label>
            <input type="text" bind:value={ingredients}>
            <label for="directives">Directives: {directives}</label>
            <textarea id="directives" name="directives" rows="4" cols="50" bind:value={directives}></textarea>
            <input type="submit" value="Update Recipe">
        </form>
-->

<!--
async function updateRecipe() {

    const recipe = {
        title,
        ingredients,
        directives,
    }

    try {
        const response = await fetch("http://localhost:8080/recipes/"+id, {
            method: 'PUT',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe),
        });
        
        switch(response.status) {

            case 200:
                hasUpdatedCorrectly = true
            break;

            case 400:
                errorCodes = await response.json()
            break;

        }

    } catch(errror) {
        errorCodes.push("COMMUNICATION_ERROR")
    }

}

-->
