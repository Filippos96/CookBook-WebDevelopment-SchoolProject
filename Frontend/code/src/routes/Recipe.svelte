<script>

    import { Link } from "svelte-routing";
    import { user } from "../user-store";

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

    async function loadUser(userId) {

        try {
            const response = await fetch("http://localhost:8080/recipes/"+userId+"/user")

            switch(response.status){

                case 200:
                    const user = await response.json()
                    console.log("USERNAME")
                    console.log(user.username)
                    return user.username
                break;

                case 400:
                    errorCodes = await response.json()
                break;

            }

        } catch(errror) {
            errorCodes.push("COMMUNICATION_ERROR")
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

        const theComment = {
            comment
        } 

        try {
            const response = await fetch("http://localhost:8080/recipes/"+id+"/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+$user.accessToken
            },
            body: JSON.stringify(theComment),
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

    let hasDeletedCommentCorrectly = false
    let failedToDeleteComments = false

    async function deleteComment(commentId) {


        const commentID = {
            commentId
        }

        try {
            const response = await fetch("http://localhost:8080/recipes/"+id+"/"+commentId, {
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+$user.accessToken
                },
                body: JSON.stringify(commentID),
            });
            
            switch(response.status) {

                case 200:
                    hasDeletedCommentCorrectly = true
                break;

                case 404:
                    errorCodes = await response.json()
                    failedToDeleteComments = true
                break;

            }

        } catch (error) {
            // Handle network error
        }

    }

</script>

<div class="everything">
    {#if isFetchingRecipe}
        <p>Wait, I'm fetching data...</p>
    {:else if failedToFetchRecipe}
        <p>Couldnt fetch the recipe. Check your internet connection.</p>
    {:else if hasDeletedCorrectly}
        <p>Deleted recipe!</p>
    {:else if recipe}

        <div class="recipe-container">
            <div id="card-container">
                <div id="card-title">{recipe.title}</div>
                    <div id="recipe-image"></div>
                <div id="details">Prep time: <span class="detail-value">10 minutes</span> | Cook time: <span class="detail-value">55 minutes</span> | Yield: <span class="detail-value">Make some food</span></div>
                <div id="card-items">
                    <span class="card-item-title">Ingredients</span>
                    <ul class="checkmark">
                        <li>{recipe.ingredients}</li>
                    </ul>
                </div>
                
                <div id="method">
                    <span class="card-item-title">Directives</span>
                    <ol>
                        <li>{recipe.directives}</li>
                    </ol>
                </div>
                {#if showComments}
                {#if isFetchingComments}
                    <p>Wait, I'm fetching comments...</p>
                {:else if failedToFetchComments}
                    <p>Couldnt fetch the comments. Check your internet connection</p>
                {:else if comments}
                <div id="comment-items">
                    <span class="comment-item-title">Comments</span>
                {#each comments as comment}
                    <div class="user">
                        <div class="user-profile">
                            <img src="https://source.unsplash.com/600x400/?food" alt="user__image" class="user__image">
                                {#await loadUser(comment.accountId)}
                                    Unknown
                                {:then username}
                                    {username}
                                {/await}
                        </div>
                        <ul class="checkmark">
                            <li>{comment.comment}</li>
                            {#if $user.accountID == comment.accountId}
                                <button on:click={() => deleteComment(comment.id)}>Delete Comment</button>
                            {/if}
                        </ul>
                    </div>
                    
                {/each}
                {#if failedToDeleteComments}
                    <ul>
                        {#each errorCodes as errorCode}
                            <li>{errorCode}</li>
                        {/each}
                    </ul>
                {/if}
                </div>
                {#if $user.isLoggedIn}
                    <form on:submit|preventDefault={createComment}>
                        <label for="comment">New comment: </label>
                        <textarea id="comment" name="comment" rows="4" cols="50" bind:value={comment}></textarea>
                        <button type="submit" value="Create Comment" class="createButton">Create Comment</button>
                    </form>
                {/if}
            
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
                <div class="buttons">
                    {#if $user.accountID == recipe.accountId}
                        <Link to="/recipes/{recipe.id}/update">Update Recipe</Link>
                        <button on:click={deleteRecipe}>Delete Recipe</button>
                    {/if}
                    <button on:click={toggleCommentSection}>
                        {#if showComments}
                            Hide Comments
                        {:else}
                            Show Comments
                        {/if}
                    </button>
                </div>
           
            </div>
            
        </div>
        
    {:else}
        <p>No recipe with the given id {id}</p>
    {/if}
</div>

<style>
    .everything {
     margin-left: 440px;
     color: black;
   }

   @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

   @import url('https://fonts.googleapis.com/css?family=Oxygen:400,700');

body {
  background: #f9f9f9;
}

.createButton {
    background: #4f46e5;
    color:white;
    padding: 10px;
}

.test {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    gap: 2rem;
    margin-left: 300px;
}

#card-container {
  background: #ededed;
  box-shadow: 0px 0px 200px #999;
  font-family: 'Oxygen', sans-serif;
  width: 65%;
  height: 385px;
}

#card-title {
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
  font-size: 25px;
  background: #455560;
  padding: 15px 20px;
  color: #fff;
  border-radius: 2px 2px 0 0;
}

#details {
  background: #fff;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  font-size: 16px;
  font-family: 'Oxygen', sans-serif;
  padding: 15px 20px;
}

.detail-value {
  color: #455560;
}

#card-items {
  background: #ededed;
  font-family: 'Oxygen', sans-serif;
  padding: 20px
}

.card-item-title {
  font-size: 18px;
  font-weight: 700;
}

ul.checkmark li:before {
    color: #455560;
    content:"\2713\0020";
    font-weight: 600;
    margin-right: 10px;
}

.checkmark li {
  list-style-type: none;
}

li {
  margin-bottom: 3px;
}

#method {
  background: #fff;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  padding: 20px;
}

#method li {
  list-style-position: inside;
  margin-bottom: 10px;
  list-style-type: none;
}

#comment-items {
  background: #ededed;
  font-family: 'Oxygen', sans-serif;
  padding: 20px
}

.comment-item-title {
  font-size: 18px;
  font-weight: 700;
}

#recipe-image {
  background: url('https://source.unsplash.com/600x400/?food');
  overflow: hidden;
  height: 450px;
  background-size: cover;
}

ol {
  counter-reset: item;
}

ol > li {
  counter-increment: item;
}

ol > li::before {
  font-weight: bold;
  content: counter(item) ".";
  margin-right: 8px;
}

.user-profile {
    display: flex;
    gap: .5rem;
    color:black;
    align-items: center;
    margin-top: 10px;
    margin-bottom:10px;
}

.user img {
    width: 40px;
    height:40px;
}

.user__image {
    border-radius: 50%;
}

.buttons {
    display: flex;
}

 </style>