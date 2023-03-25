import { writable } from "svelte/store"

export const user = writable({
    isLoggedIn: false,
    accessToken: "",
    IDToken: "",
    username: "",
    accountID: ""
})
/*
IDToken: "",
username: "",
accountID: ""
*/