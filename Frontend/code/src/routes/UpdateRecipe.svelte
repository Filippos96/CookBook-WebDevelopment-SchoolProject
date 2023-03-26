<script>

    import { user } from "../user-store";

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
            "Content-Type": "application/json",
            "Authorization": "Bearer "+$user.accessToken
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
    {#if isFetchingRecipe}
        <p>Wait, I'm fetching data...</p>
    {:else if failedToFetchRecipe}
        <p>Couldnt fetch the recipe. Check your internet connection.</p>
    {:else if hasUpdatedCorrectly}
        <p>Updated recipe!</p>
    {:else if recipe}

            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Update Recipe</h2>
            </div>


        <form on:submit|preventDefault={updateRecipe}>

            <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Title</label>
                <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" bind:value={title} class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
                </div>
                
            <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Ingredients</label>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" bind:value={ingredients} class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
            
            <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Directives</label>
                <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" bind:value={directives} class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
            <div class="mt-10">
                <input type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" value="Update Recipe">
            </div>
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