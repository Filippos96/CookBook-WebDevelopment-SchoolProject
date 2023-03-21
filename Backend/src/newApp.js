//import express from 'express'
//import {createPool} from 'mariadb'
console.log("Hello")
const express = require("express")
const { createPool } = require('mariadb');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded())


const pool = createPool({
    host: "db",
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'abc',
    connectionLimit: 10

})

pool.on('error',function(error){
    console.log("Error from pool", error)
})

app.use(function(request, response, next){
    
    response.set("Access-Control-Allow-Origin", "*")
    response.set("Access-Control-Allow-Methods", "*")
    response.set("Access-Control-Allow-Headers", "*")
    response.set("Access-Control-Expose-Headers", "*")

    next()

})

app.get("/recipes", async function(request, response){
    setTimeout(async function(){
        try {
            const query = "SELECT * FROM recipes ORDER BY title"
            const recipes = await pool.query(query)
            response.status(200).json(recipes)
        } catch (error){
            console.log(error)
            response.status(500).end()
        }
        
    }, 1000)
})

app.get("/recipes/:id", async function(request, response){
    setTimeout(async function(){
        try {
            const recipeId = request.params.id // retrieve the recipe ID from the request parameters
            const query = "SELECT * FROM recipes WHERE id = ?"
            const recipe = await pool.query(query, [recipeId])   
            if(recipe){ 
                console.log(recipe)
                console.log("There is!")  
                response.status(200).json(recipe) // send the retrieved data back in the response
            } else {
                console.log("There is not!")
                response.status(404).end()
            }
        } catch(error) {
            console.log(error)
            response.status(500).end()
        }
    }, 1000)
})
/*
app.get("/recipes/:id", async function(request, response){
    setTimeout(async function(){
        try {
            const recipeId = request.params.id // retrieve the recipe ID from the request parameters
            const query = "SELECT * FROM recipes WHERE id = ?"
            const recipe = await pool.query(query, [recipeId])
            if(recipe){
                console.log(recipe)
                response.status(200).json(recipe) // send the retrieved data back in the response
            } else {
                response.status(404).end()
            }
        } catch(error) {
            console.log(error)
            response.status(500).end()
        }
    }, 1000)
})
*/
app.get("/recipes/:id/comments", async function(request, response){
    console.log("get request")
    try{
        
        const recipeId = request.params.id
        const query = "SELECT * FROM comments WHERE recipeId = ?"
        const comments = await pool.query(query, [recipeId])
        console.log(comments)
        response.status(200).json(comments)
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})

//need to edit this to get the userId
app.post("/recipes/:id/comments", async function(request, response){
    try{
        const newComment = request.body
        const accountId = 1 //this line needs editing
        const recipeId = request.params.id
        console.log(newComment.comment)
        
        const query = "INSERT INTO comments (accountId, recipeId, comment) VALUES (?, ?, ?)"
        await pool.query(query, [accountId, recipeId, newComment.comment])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.post("/recipes", async function(request, response){
    try{
        const newRecipe = request.body
        const accountId = 1 //this line needs editing
        console.log("Post req")
        console.log(newRecipe.title)
        console.log(newRecipe.ingredients)
        console.log(newRecipe.directives)
        
        const query = "INSERT INTO recipes (accountId, title, ingredients, directives) VALUES (?, ?, ?, ?)"
        await pool.query(query, [accountId, newRecipe.title, newRecipe.ingredients, newRecipe.directives])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.delete("/recipes/:id", async function(request, response){
    try{
        
        const recipeId = request.params.id
        const deleteRecipeQuery = "DELETE FROM recipes WHERE id = ?"
        const deleteCommentsQuery = "DELETE FROM comments WHERE recipeId = ?"
        await pool.query(deleteCommentsQuery, [recipeId])
        await pool.query(deleteRecipeQuery, [recipeId])
        response.status(200).end()
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})

app.put("/recipes/:id", async function(request, response){
    try{
        const newRecipe = request.body
        
        const recipeId = request.params.id
        const query = "UPDATE recipes SET title = ?, ingredients = ?, directives = ? WHERE id = ?"
        await pool.query(query , [newRecipe.title, newRecipe.ingredients, newRecipe.directives, recipeId])
        response.status(200).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.post("/tokens", function(request, response){

    const grantType = request.body.grant_type
    const username = request.body.username
    const password = request.body.password

    if(grantType != "password"){
        response.status(400).json({error: "unsupported_grant_type"})
        return
    }

    if(username == "abc" && password == "abc123"){


    }

})

/*
app.get("/recipes", async function(request, response){

    //if we want to test new code we could restart everything or we can make use of volumes
    //the following code in the dockerfile makes it so the app is restarted when changed

    //#watch listens to changes in the code, making it restart the aplication
    //CMD node --watch ./src/app.js
    try {
        const query = "SELECT * FROM recipes ORDER BY title"
        const recipes = await pool.query(query)
        response.status(200).json(recipes) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).end()
    }
})
*/
/*
app.get("/recipes/:id", async function(request, response){
    try {
        
        const recipeId = request.params.id // retrieve the recipe ID from the request parameters
        const query = "SELECT * FROM recipes WHERE id = ?"
        const recipe = await pool.query(query, [recipeId])
        response.status(200).json(recipe) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).end()
    }
})
*/

//need to edit this to get the userId
/*
app.post("/recipes", async function(request, response){
    try{
        const newRecipe = request.body
        const accountId = 1 //this line needs editing
        
        const query = "INSERT INTO recipes (accountId, title, ingredients, directives) VALUES (?, ?, ?, ?)"
        await pool.query(query, [accountId, newRecipe.title, newRecipe.ingredients, newRecipe.directives])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})
*/
/*
app.put("/recipes/:id", async function(request, response){
    try{
        const newRecipe = request.body
        
        const recipeId = request.params.id
        const query = "UPDATE recipes SET title = ?, ingredients = ?, directives = ? WHERE id = ?"
        await pool.query(query , [newRecipe.title, newRecipe.ingredients, newRecipe.directives, recipeId])
        response.status(200).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})
*/
/*
app.delete("/recipes/:id", async function(request, response){
    try{
        
        const recipeId = request.params.id
        const query = "DELETE FROM recipes WHERE id = ?"
        await pool.query(query, [recipeId])
        response.status(200).end()
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})
*/

app.get("/comments", async function(request, response){
    try {
        
        const query = "SELECT * FROM comments"
        const comments = await pool.query(query)
        response.status(200).json(comments) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).json(comments)
    }
})
/*
app.get("/recipes/:id/comments", async function(request, response){
    try{
        
        const recipeId = request.params.id
        const query = "SELECT * FROM comments WHERE recipeId = ?"
        const comments = await pool.query(query, [recipeId])
        response.status(200).json(comments)
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})
*/
/*
//need to edit this to get the userId
app.post("/recipes/:id/comments", async function(request, response){
    try{
        const newComment = request.body
        const accountId = 1 //this line needs editing
        const recipeId = request.params.id
        
        const query = "INSERT INTO comments (accountId, recipeId, comment) VALUES (?, ?, ?)"
        await pool.query(query, [accountId, recipeId, newComment.comment])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})
*/
app.put("/comments/:id", async function(request, response){
    try{
        const newComment = request.body
        const commentId = request.params.id
        
        const query = "UPDATE comments SET comment = ? WHERE id = ?"
        await pool.query(query, [newComment.comment, commentId])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.delete("/comments/:id", async function(request, response){
    try{
        
        const commentId = request.params.id
        const query = "DELETE FROM comments WHERE id = ?"
        await pool.query(query, [commentId])
        response.status(200).end()
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})

app.get("/accounts", async function(request, response){
    try {
        
        const query = "SELECT * FROM accounts"
        const accounts = await pool.query(query)
        response.status(200).json(accounts) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).end()
    }
})

app.get("/accounts/:id", async function(request, response){
    try{
        const accountId = request.params.id
        
        const query = "SELECT * FROM accounts WHERE id = ?"
        const account = await pool.query(query, [accountId])
        response.status(200).json(account)
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.put("/accounts/:id", async function(request, response){
    try{
        const newAccount = request.body
        const accountId = request.params.id
        
        const query = "UPDATE accounts SET username = ?, password = ? WHERE id = ?"
        await pool.query(query, [newAccount.username, newAccount.password, accountId])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.delete("/accounts/:id", async function(request, response){
    try{
        
        const accountId = request.params.id
        const deleteCommentsQuery = "DELETE FROM comments WHERE accountId = ?"
        const deleteAccountQuery = "DELETE FROM accounts WHERE id = ?"
        await pool.query(deleteCommentsQuery, [accountId])
        await pool.query(deleteAccountQuery, [accountId])
        response.status(200).end()
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})

app.post("/accounts", async function(request, response){
    try{
        const newAccount = request.body
        
        const query = "INSERT INTO accounts (username, password) VALUES (?, ?)"
        await pool.query(query, [newAccount.username, newAccount.password])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.listen(8080)