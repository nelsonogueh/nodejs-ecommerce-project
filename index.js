const express = require("express")
const app = express()

const Friends = require("./models/FriendsList")

const HOSTNAME = "127.0.0.1"
const PORT = 8080

app.use(express.json())


// ROOT PATH
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Nelson's CRUD path</h1>")  
})


// http://127.0.0.1:8080/
app.get("/all-friends", (req, res) => {
   res.json(res.send(Friends))
})



// http://127.0.0.1:8080/new-user/?name=Jacob Doe&age=99&phonenumber=09030000000
app.post("/new-user", (req, res) => {

    // Using destructuring method to get all the expected query strings
    let { username, age, phonenumber} = req.query;

    
    // Generating a unique id with Unix time for every new user coming.
    let userUniqueId = Date.now();

    // Organizing the submitted query strings into an object 
    let newUserObject = {
        id: userUniqueId,
        name: username,
        age: age,
        phone: phonenumber
    }

    // Adding to the user array
   Friends.push(newUserObject)

   // Returning the array with the newly added item
   res.json(Friends).statusCode(200)
})




app.put("/update-friend", (req, res) => {
    res.send("Update friend endpoint...")
})


app.delete("/delete-friend/", (req, res) => {
    res.send("Delete friend endpoint...")
})












app.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server is running at HOST: ${HOSTNAME} on port: ${PORT}`)
})