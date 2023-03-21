<script>

    import {Link} from "svelte-routing";

    const fetchRecipesPromise = fetch("http://localhost:8080/recipes")

</script>



<div class="main-page">
    <div class="header">
        <h2>Welcome to CockBock</h2>
    </div>
    
    <div class="feed">
        {#await fetchRecipesPromise}

            <p>Wait, I'm loading...</p>
    
        {:then response} 

            {#await response.json() then recipes}
                <ul>
                {#each recipes as recipe (recipe.id)}
                    <div class="post">
                        <Link to="/recipes/{recipe.id}">
                            <li>
                                <!-- Post 2 -->
                                <div class="profile">
                                    <div class="profile-img">
                                        <img src="/public/donut.jpg" alt="">
                                    </div>
                                    {recipe.accountId}
                                </div>
                                <div class="image">
                                    <img src="/public/donut.jpg" alt="">
                                </div> 
                                <div class="username">
                                    {recipe.title}
                                </div> 
                            </li>
                        </Link>
                    </div>
                {/each} 
                </ul>
            {/await}

        {:catch error}

            <p>Something went wrong, try again later.</p>
                
        {/await}
    </div>
</div>



<style>

    .main-page {
        padding-top: 20px;
    }

    button {
        outline: none;
        background: #fff;
        color: black;
        padding: 0;
    }

    button:hover {
        border-color: none;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
    }

    .profile {
        width: 200px;
        display: flex;
        align-items: center;
        background: #286052;
        padding: 5px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        text-decoration: none;
        color: white;
    }

    .profile-img {
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #e2336b;
        align-items: center;
        justify-content: center;
        background: #fff;
        margin-right: 10px;
    }

    .profile img {
        width: 35px;
        height:35px;
        object-fit: cover;
        border-radius: 50%;
        object-position: center;
    }

    .feed {
        width: 252px;
        margin-left: 300px;
    }

    .post {
        margin-top: 60px;
        text-decoration: none;
        color: white;
        list-style-type: none;
    }

    .image {
        height: 210px;
    }

    .image img {
        width: 210px;
        height: 210px;
        object-fit:contain;
        background: white;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }

    .username {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
        background: #286052;
        align-items: center;
        width: 210px;
        height: 50px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

</style>