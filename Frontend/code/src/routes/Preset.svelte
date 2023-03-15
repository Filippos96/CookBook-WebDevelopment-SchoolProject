<script>
    import svelteLogo from '../assets/svelte.svg'
    import Counter from '../lib/Counter.svelte'
    import {accounts} from '../data.js'
</script>

<div class="preset">
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more!
  </p>

  <div class="database">
    <p>
      {accounts[0].name}
    </p>
  </div>

  <style>
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
      filter: drop-shadow(0 0 2em #10da05aa);
    }
    .read-the-docs {
      color: #888;
    }
  
    * {
      padding: 0;
      margin: 0;
      list-style:none;
      text-decoration: none;
      margin-left:250px;
    }
    
  /*
    .sidebar {
      position: fixed;
      left: 0;
      width: 250px;
      height: 100%;
      background: #042331;
    }

    .sidebar header {
      font-size: 22px;
      color: white;
      text-align: center;
      line-height:70px;
      background: red;
      user-select: none;
    }
  
    .sidebar ul a {
      display: block;
      height: 100%;
      width: 100%;
      line-height: 65px;
      font-size: 20px;
      color:white;
      padding-left: 40px;
    }
  */
  </style> 