<script>
    
    let username = ""
    let password = ""

    let errorCodes = []
    let accountWasCreated = false
    let failedToCreateAccount = false

    async function createAccount() {

        const account = {
            username,
            password
        }

        try {
            const response = await fetch("http://localhost:8080/accounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(account),
            })

            switch(response.status){

                case 201:
                    accountWasCreated = true
                    failedToCreateAccount = false
                    account.username = ""
                    account.password = ""
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

<div class="account">
    <h1>Create new account</h1>

    <form on:submit|preventDefault={createAccount}>
        <label for="username">Username: </label>
        <input type="text" bind:value={username}>
        <label for="password">Password: </label>
        <input type="text" bind:value={password}>
        <input type="submit" value="Create new account">
    </form>

    {#if accountWasCreated}
        Account was created
    {/if}
    
    {#if failedToCreateAccount}
        {#if 0 < errorCodes.length}
            <p>We have errors!</p>
            <ul>
                {#each errorCodes as errorCode}
                    <li>{errorCode}</li>
                {/each}
            </ul>
        {/if}
    {/if}

</div>

<style>
    .account {
        margin-left: 250px;
        color: black;
    }
</style>