<script>

    import {Link} from "svelte-routing";

    const fetchRecipesPromise = fetch("http://localhost:8080/recipes")

    let errorCodes = []


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


</script>

<div class="recipes">
    <h1>RECIPES</h1>

    {#await fetchRecipesPromise}

        <p>Wait, I'm loading...</p>
        
    {:then response} 

        {#await response.json() then recipes}
            <ul>
            {#each recipes as recipe (recipe.id)}
                <div class="container">
                    <div class="card">
                        <div class="card__header">
                        <img src="https://source.unsplash.com/600x400/?food" alt="card__image" class="card__image" width="600">
                        </div>
                        <div class="card__body">
                            <div class="card_link">
                                <Link to="/recipes/{recipe.id}">
                                    <h4 class="tag tag-blue">{recipe.title}</h4>
                                </Link>
                            </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                        </div>
                        <div class="card__footer">
                        <div class="user">
                            <img src="https://source.unsplash.com/600x400/?food" alt="user__image" class="user__image">
                            <div class="user__info">
                            <h5>{#await loadUser(recipe.id)}
                                    Unknown
                                {:then username}
                                    {username}
                                {/await}
                            </h5>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/each} 
            </ul>
        {/await}

    {:catch error}

        <p>Something went wrong, try again later.</p>
        
    {/await}
</div>


<style>

    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    :global(a) {
        text-decoration: none;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 1200px;
        gap: 2rem;
        margin-left: 150px;
    }

    img {
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    .card {
        display: flex;
        flex-direction: column;
        width: clamp(20rem, calc(20rem + 2vw), 22rem);
        overflow: hidden;
        box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
        border-radius: 1em;
        background: #ECE9E6;
        background: linear-gradient(to right, #FFFFFF, #ECE9E6);
        margin-block: 2rem;
    }

    .link {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }

    .card__body {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        color: black;
    }

    .card_link {
        align-self: center;
    }

    .tag {
    align-self: flex-start;
    padding: .25em .75em;
    border-radius: 1em;
    font-size: .60rem;
    }

    .tag + .tag {
    margin-left: .5em;
    }

    .tag-blue {
        background: #56CCF2;
        background: linear-gradient(to bottom, #2F80ED, #56CCF2);
        color: #fafafa;
        align-self: center;
        line-height: 30px;
    }

    .card__body h4 {
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    .card__footer {
        display: flex;
        padding: 1rem;
        margin-top: auto;
    }

    .user {
        display: flex;
        gap: .5rem;
        color:black;
        align-items: center;
    }

    .user img {
        width: 40px;
        height:40px;
    }

    .user__image {
        border-radius: 50%;
    }

 </style>
 