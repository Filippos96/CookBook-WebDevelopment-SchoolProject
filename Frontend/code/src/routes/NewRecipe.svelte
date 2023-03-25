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

<div class="everything">

    {#if recipeWasCreated}
        <p>Recipe created</p>
    {:else}
<!--<form on:submit|preventDefault={createRecipe}>
        <label for="title">Title: </label>
        <input type="text" bind:value={title}>
        <label for="ingredients">Ingredients: </label>
        <input type="text" bind:value={ingredients}>
        <label for="directives">Directives: </label>
        <textarea id="directives" name="directives" rows="4" cols="50" bind:value={directives}></textarea>
        <input type="submit" value="Create Recipe">
    </form>-->
    


    
    <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">New Recipe</h2>
      </div>


  <form on:submit|preventDefault={createRecipe}>

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
          <input type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" value="Submit Recipe">
      </div>
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
    .everything {
     margin-left: 300px;
     color: black;
   }
 </style>
 