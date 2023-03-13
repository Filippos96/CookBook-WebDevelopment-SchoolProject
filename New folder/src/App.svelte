<script>

  import Router from "svelte-spa-router"
  import Home from './routes/Home.svelte';
  import Login from './routes/Login.svelte';
  import Navbar from "./routes/NavigationBar/Navbar.svelte";
  import Sidebar from "./routes/NavigationBar/Sidebar.svelte";
  import NotFound from './routes/NotFound.svelte'
  import Posts from "./routes/Posts.svelte";
  import Preset from './routes/Preset.svelte'

  let routes = {
    "/": Home,
    "/login": Login,
    "/preset": Preset,
    "/posts": Posts,
    "/sidebar": Sidebar,
    "/navbar": Navbar,

    "*": NotFound
  }
  
</script>

<main>
  <!--<Sidebar />-->
    <Navbar />
    
  <div>
    <Router {routes}/>
  </div>
  
  

</main>

<style>
   div {
    margin-left: 300px;
  }
</style>

