<script>

    import { user } from "../user-store";

    let title = ""
    let ingredients = ""
    let directives = ""
    let errorCodes = []
    let recipeWasCreated = false

    async function createRecipe() {

        const recipe = {
            title,
            ingredients,
            directives,
        }

        try {
            const response = await fetch("http://localhost:8080/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+$user.accessToken
            },
            body: JSON.stringify(recipe),
            })

            switch(response.status){

                case 201:
                    recipeWasCreated = true
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

<div>
    <h1>New RECIPE</h1>

    {#if recipeWasCreated}
        <p>Recipe created</p>
    {:else}

    <form on:submit|preventDefault={createRecipe}>
        <label for="title">Title: </label>
        <input type="text" bind:value={title}>
        <label for="ingredients">Ingredients: </label>
        <input type="text" bind:value={ingredients}>
        <label for="directives">Directives: </label>
        <textarea id="directives" name="directives" rows="4" cols="50" bind:value={directives}></textarea>
        <input type="submit" value="Create Recipe">
    </form>

    {#if 0 < errorCodes.length}
        <p>We have errors!</p>
        <ul>
            {#each errorCodes as errorCode}
                <li>{errorCode}</li>
            {/each}
        </ul>
    {/if}
    {/if}

</div>



<style>
    div {
     margin-left: 300px;
     color: black;
   }
 </style>
 