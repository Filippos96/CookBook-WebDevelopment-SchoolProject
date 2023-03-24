<script>

  import {Router, Link, Route} from "svelte-routing";
  import Home from './routes/Home.svelte';
  import Login from './routes/Login.svelte';
  import Navbar from "./routes/NavigationBar/Navbar.svelte";
  import Sidebar from "./routes/NavigationBar/Sidebar.svelte";
  import NotFound from './routes/NotFound.svelte'
  import Posts from "./routes/Posts.svelte";
  import Preset from './routes/Preset.svelte';
  import Recipe from "./routes/Recipe.svelte";
  import Recipes from "./routes/Recipes.svelte";
  import Comments from "./routes/RecipeComments.svelte"
  import NewRecipe from "./routes/NewRecipe.svelte";
  import UpdateRecipe from "./routes/UpdateRecipe.svelte";
  import NewAccount from "./routes/NewAccount.svelte";

  import { user } from "./user-store";
  import Test from "./routes/test.svelte";
  
</script>

<main>
  <!--<Sidebar />-->
  <Router>
    <Navbar />
    
    <Route path="/recipes" component={Recipes} />
    <Route path="/recipes/:id" component={Recipe} />
    <Route path="/recipes/:id/comments" component={Comments} />
    <Route path="/newRecipe" component={NewRecipe} />
    <Route path="/recipes/:id/update" component={UpdateRecipe} />
    <Route path="/login" component={Login} />
    <Route path="/createAccount" component={NewAccount} />
    <Route path="/test" component={Test} />

    <div>
      {#if $user.isLoggedIn}
        <Link to="/newRecipe">Create new recipe</Link>
      {:else}
        <Link to="/login">Log in</Link>
      {/if}
    </div>
    

  </Router>

</main>

<style>
   div {
    margin-left: 300px;
    color: black;
  }
</style>

