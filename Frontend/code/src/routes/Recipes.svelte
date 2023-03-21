<script>

    import {Link} from "svelte-routing";

    const fetchRecipesPromise = fetch("http://localhost:8080/recipes")

</script>

<div>
    <h1>RECIPES</h1>

    {#await fetchRecipesPromise}

        <p>Wait, I'm loading...</p>
        
    {:then response} 

        {#await response.json() then recipes}
            <ul>
            {#each recipes as recipe (recipe.id)}
                    <li>
                        <Link to="/recipes/{recipe.id}">{recipe.title}</Link>
                    </li>
                {/each} 
            </ul>
        {/await}

    {:catch error}

        <p>Something went wrong, try again later.</p>
        
    {/await}
</div>




<style>
    div {
     margin-left: 300px;
     color: black;
   }
 </style>
 