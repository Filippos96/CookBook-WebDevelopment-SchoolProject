<script>

  import {Router, Link, Route} from "svelte-routing";
  import Login from './routes/Login.svelte';
  import Navbar from "./routes/NavigationBar/Navbar.svelte";
  import Recipe from "./routes/Recipe.svelte";
  import Recipes from "./routes/Recipes.svelte";
  import NewRecipe from "./routes/NewRecipe.svelte";
  import UpdateRecipe from "./routes/UpdateRecipe.svelte";
  import NewAccount from "./routes/NewAccount.svelte";
  import About from "./routes/About.svelte";
  import Logout from "./routes/Logout.svelte";
  
</script>

<main>
  <!--<Sidebar />-->
  <Router>
    <Navbar />
    
    <Route path="/recipes" component={Recipes} />
    <Route path="/recipes/:id" component={Recipe} />
    <Route path="/newRecipe" component={NewRecipe} />
    <Route path="/recipes/:id/update" component={UpdateRecipe} />
    <Route path="/login" component={Login} />
    <Route path="/createAccount" component={NewAccount} />
    <Route path="/about" component={About} />
    <Route path="/logout" component={Logout} />
    
  </Router>

</main>

<style>

</style>

