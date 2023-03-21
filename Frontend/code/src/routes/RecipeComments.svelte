<script>

    export let id

    let isFetchingComments = true
    let failedToFetchComments = false
    let comments = null

    async function loadRecipeComments(){
        console.log("KJAJKA")
        try {

            const response = await fetch("http://localhost:8080/recipes/"+id+"/comments")

            switch(response.status) {

                case 200:
                    isFetchingComments = false
                    comments = await response.json()
                    console.log(comments)
                    break
                
                case 404:
            }
        } catch(error) {

            isFetchingComments = false
            failedToFetchComments = true

        }

    }

loadRecipeComments()

</script>

<div class="everything">

    <h1>Comments</h1>
    {#if isFetchingComments}
        <p>Wait, I'm fetching data...</p>
    {:else if failedToFetchComments}
        <p>Couldnt fetch the recipe. Check your internet connection.</p>
    {:else if comments}
        {#each comments as comment}
            <div>
                <div>Id: {comment.id}</div>
                <div>AccountId: {comment.accountId}</div>
                <div>RecipeId: {comment.recipeId}</div>
                <div>Comment: {comment.comment}</div>
            </div>
        {/each}
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