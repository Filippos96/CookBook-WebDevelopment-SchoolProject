<script>
    
    let username = ""
    let password = ""

</script>
<div class="login">
    <h1>Login</h1>

    <form>
        <label for="username">Username: </label>
        <input type="text" bind:value={username}>
        <label for="password">Password: </label>
        <input type="text" bind:value={password}>
        <input type="submit" value="Log in">
    </form>

</div>

<style>
    .login {
        margin-left: 250px;
        color: black;
    }
</style>