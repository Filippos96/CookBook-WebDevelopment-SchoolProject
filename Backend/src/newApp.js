//import express from 'express'
//import {createPool} from 'mariadb'
console.log("Hello")
const express = require("express")
const { createPool } = require('mariadb');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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

app.get("/recipes", async function(request, response){

    //if we want to test new code we could restart everything or we can make use of volumes
    //the following code in the dockerfile makes it so the app is restarted when changed

    //#watch listens to changes in the code, making it restart the aplication
    //CMD node --watch ./src/app.js
    try {
        const connection = await pool.getConnection()
        const query = "SELECT * FROM recipes ORDER BY title"
        const recipes = await connection.query(query)
        response.status(200).json(recipes) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).end()
    }
})

app.get("/recipes/:id", async function(request, response){
    try {
        const connection = await pool.getConnection()
        const recipeId = request.params.id // retrieve the recipe ID from the request parameters
        const query = "SELECT * FROM recipes WHERE id = ?"
        const recipe = await connection.query(query, [recipeId])
        response.status(200).json(recipe) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).end()
    }
})

//need to edit this to get the userId
app.post("/recipes", async function(request, response){
    try{
        const newRecipe = request.body
        const accountId = 1 //this line needs editing
        const connection = await pool.getConnection()
        const query = "INSERT INTO recipes (accountId, title, ingredients, directives) VALUES (?, ?, ?, ?)"
        await connection.query(query, [accountId, newRecipe.title, newRecipe.ingredients, newRecipe.directives])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.put("/recipes/:id", async function(request, response){
    try{
        const newRecipe = request.body
        const connection = await pool.getConnection()
        const recipeId = request.params.id
        const query = "UPDATE recipes SET title = ?, ingredients = ?, directives = ? WHERE id = ?"
        await connection.query(query , [newRecipe.title, newRecipe.ingredients, newRecipe.directives, recipeId])
        response.status(200).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.delete("/recipes/:id", async function(request, response){
    try{
        const connection = await pool.getConnection()
        const recipeId = request.params.id
        const query = "DELETE FROM recipes WHERE id = ?"
        await connection.query(query, [recipeId])
        response.status(200).end()
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})

app.get("/comments", async function(request, response){
    try {
        const connection = await pool.getConnection()
        const query = "SELECT * FROM comments"
        const comments = await connection.query(query)
        response.status(200).json(comments) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).json(comments)
    }
})

app.get("/recipes/:id/comments", async function(request, response){
    try{
        const connection = await pool.getConnection()
        const recipeId = request.params.id
        const query = "SELECT * FROM comments WHERE recipeId = ?"
        const comments = await connection.query(query, [recipeId])
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
        const connection = await pool.getConnection()
        const query = "INSERT INTO comments (accountId, recipeId, comment) VALUES (?, ?, ?)"
        await connection.query(query, [accountId, recipeId, newComment.comment])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.put("/comments/:id", async function(request, response){
    try{
        const newComment = request.body
        const commentId = request.params.id
        const connection = await pool.getConnection()
        const query = "UPDATE comments SET comment = ? WHERE id = ?"
        await connection.query(query, [newComment.comment, commentId])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.delete("/comments/:id", async function(request, response){
    try{
        const connection = await pool.getConnection()
        const commentId = request.params.id
        const query = "DELETE FROM comments WHERE id = ?"
        await connection.query(query, [commentId])
        response.status(200).end()
    }
    catch(error){
        console.log(error)
        response.status(500).end()
    }
})

app.get("/accounts", async function(request, response){
    try {
        const connection = await pool.getConnection()
        const query = "SELECT * FROM accounts"
        const accounts = await connection.query(query)
        response.status(200).json(accounts) // send the retrieved data back in the response
    } catch(error) {
        console.log(error)
        response.status(500).end()
    }
})

app.get("/accounts/:id", async function(request, response){
    try{
        const accountId = request.params.id
        const connection = await pool.getConnection()
        const query = "SELECT * FROM accounts WHERE id = ?"
        const account = await connection.query(query, [accountId])
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
        const connection = await pool.getConnection()
        const query = "UPDATE accounts SET username = ?, password = ? WHERE id = ?"
        await connection.query(query, [newAccount.username, newAccount.password, accountId])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.delete("/accounts/:id", async function(request, response){
    try{
        const connection = await pool.getConnection()
        const accountId = request.params.id
        const deleteCommentsQuery = "DELETE FROM comments WHERE accountId = ?"
        const deleteAccountQuery = "DELETE FROM accounts WHERE id = ?"
        await connection.query(deleteCommentsQuery, [accountId])
        await connection.query(deleteAccountQuery, [accountId])
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
        const connection = await pool.getConnection()
        const query = "INSERT INTO accounts (username, password) VALUES (?, ?)"
        await connection.query(query, [newAccount.username, newAccount.password])
        response.status(201).end()
    }
    catch(error){
        console.log(error);
        response.status(500).end()
    }
})

app.listen(8080)