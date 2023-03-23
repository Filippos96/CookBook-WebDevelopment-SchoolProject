<script>

    import { Link } from "svelte-routing";

    export let id
    let isFetchingRecipe = true
    let failedToFetchRecipe = false
    let recipe = null
    let hasDeletedCorrectly = false

    async function loadRecipe(){
        
        try {

            const response = await fetch("http://localhost:8080/recipes/"+id)

            switch(response.status) {

                case 200:
                    console.log("WE ARE")
                    isFetchingRecipe = false
                    recipe = await response.json()
                    recipe = recipe[0]
                    await loadRecipeComments()
                    break
                
                case 404:
            }
        } catch(error) {

            isFetchingRecipe = false
            failedToFetchRecipe = true

        }
    }

    async function deleteRecipe() {

        try {
            const response = await fetch("http://localhost:8080/recipes/"+id, {
                method: 'DELETE',
            });
            
            switch(response.status) {

                case 200:
                    hasDeletedCorrectly = true
                break;

                case 404:

                break;

            }

        } catch (error) {
            // Handle network error
        }
    
    }

loadRecipe()

    let isFetchingComments = true
    let failedToFetchComments = false
    let comments = null

    async function loadRecipeComments(){
        console.log("KJAJKA")
        try {

            const commentsResponse = await fetch("http://localhost:8080/recipes/"+id+"/comments")

            switch(commentsResponse.status) {

                case 200:
                    isFetchingComments = false
                    comments = await commentsResponse.json()
                    break
                
                case 404:
            }
        } catch(error) {

            isFetchingComments = false
            failedToFetchComments = true

        }

    }

    var showComments = false
    function toggleCommentSection() {
        showComments = !showComments
    }

    let comment = ""
    let errorCodes = []
    let commentWasCreated = false

    async function createComment() {

        const recipe = {
            comment
        }

        try {
            const response = await fetch("http://localhost:8080/recipes/"+id+"/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe),
            })

            switch(response.status){

                case 201:
                    await loadRecipeComments()
                    commentWasCreated = true
                    comment = ""
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
    <h1>Recipe</h1>
    {#if isFetchingRecipe}
        <p>Wait, I'm fetching data...</p>
    {:else if failedToFetchRecipe}
        <p>Couldnt fetch the recipe. Check your internet connection.</p>
    {:else if hasDeletedCorrectly}
        <p>Deleted recipe!</p>
    {:else if recipe}
        <div>Recipe ID: {recipe.id}</div>
        <div>AccountId: {recipe.accountId}</div>
        <div>Title: {recipe.title}</div>
        <div>Ingredients: {recipe.ingredients}</div>
        <div>Directives: {recipe.directives}</div>
        <Link to="/recipes/{recipe.id}/comments">{recipe.title}</Link>
        <Link to="/recipes/{recipe.id}/update">Update Recipe</Link>
        <button on:click={deleteRecipe}>Delete Recipe</button>
        <button on:click={toggleCommentSection}>Load comments</button>
    {:else}
        <p>No recipe with the given id {id}</p>
    {/if}
    {#if showComments}
    <h1>Comments</h1>
    {#if isFetchingComments}
        <p>Wait, I'm fetching comments...</p>
    {:else if failedToFetchComments}
        <p>Couldnt fetch the comments. Check your internet connection</p>
    {:else if comments}
    {#each comments as comment}
        <div>Commenter ID: {comment.accountId}</div>
        <div>Comment: {comment.comment}</div>
    {/each}

    <form on:submit|preventDefault={createComment}>
        <label for="comment">New comment: </label>
        <textarea id="comment" name="comment" rows="4" cols="50" bind:value={comment}></textarea>
        <input type="submit" value="Create Comment">
    </form>

    {#if 0 < errorCodes.length}
        <p>We have errors!</p>
        <ul>
            {#each errorCodes as errorCode}
                <li>{errorCode}</li>
            {/each}
        </ul>
    {/if}

    {:else}
        <p>No recipe with the given id {id}</p>
    {/if}
    {/if}
    


</div>

<style>
    .everything {
     margin-left: 300px;
     color: black;
   }
 </style>