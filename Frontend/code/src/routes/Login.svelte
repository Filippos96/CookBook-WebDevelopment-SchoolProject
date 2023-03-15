<script>
    
    let username = ""
    let password = ""

    let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

</script>
<div class="login">
    <h1>Login</h1>

    {#if user.loggedIn}
    <button on:click={toggle}>
        Log out
    </button>
    {/if}
    
    
    {#if !user.loggedIn}
    Username:
    <span><input bind:value={username} placeholder="Enter your name"></span>
    
    Password:
    <input bind:value={password} placeholder="Enter your password">
    
    <button on:click={toggle}>
        Log in
    </button>
    {/if}
</div>

<style>
    .login {
        margin-left: 250px;
    }
</style>