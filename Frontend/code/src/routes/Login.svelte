<script>

    import { user } from "../user-store"
    
    let username = ""
    let password = ""
    let grant_type = 'password'

    let errorCodes = []
    let accountWasCreated = false
    let failedToCreateAccount = false

    let loggedInSuccessfully = false
    let loggedInAccount = null

 //   let accessToken = null

    async function login() {

        const account = {
            username,
            password
        }

        try {
            const response = await fetch("http://localhost:8080/tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
            })

            switch(response.status){

                case 200:
                    accountWasCreated = true
                    failedToCreateAccount = false
                    account.username = ""
                    account.password = ""
                    loggedInSuccessfully = true
                    loggedInAccount = await response.json()
                    const accessToken = loggedInAccount.access_token
                    $user = {
                        isLoggedIn: true,
                        accessToken,
                    }
                break;

                case 500:
                    errorCodes = await response.json()
                    failedToCreateAccount = true
                break;

                case 409:
                    errorCodes = await response.json()
                    failedToCreateAccount = true
                break;

            }

        } catch(error) {
            failedToCreateAccount = true
            errorCodes.push("COMMUNICATION_ERROR")
        }
    }

</script>
<div class="login">
    <h1>Login</h1>

    {#if loggedInSuccessfully}
        <p>Logged in</p>
        
    {/if}
    
    {#if loggedInAccount}
        <p>WE LOGGED IN</p>
    {:else}
        <form on:submit|preventDefault={login}>
            <label for="username">Username: </label>
            <input type="text" bind:value={username}>
            <label for="password">Password: </label>
            <input type="text" bind:value={password}>
            <input type="submit" value="Log in">
        </form>
    {/if}

</div>

<style>
    .login {
        margin-left: 250px;
        color: black;
    }
</style>