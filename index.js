const express = require('express');
const cors = require('cors');
const User = require('./config')
const app = express();
app.use(express.json())
app.use(cors())

// getting all of the users data
app.get("/", async (req, res) => {
    const snapshot = await User.get()
    const list = snapshot.docs.map(doc =>({id: doc.id,  ...doc.data()}))
    res.send(list)
})


// getting all the names starting with the letter "j"
app.get("/getNames", async (req, res) => {
    const snapshot = await User.get()
    const list = snapshot.docs.map(doc =>(doc.data().name))
    const names = list.filter(name => name.charAt(0) === "j")
    res.send(names)
})


// post method for creating new users
app.post("/create", async(req, res) => {
    console.log("i run")
    const data = req.body;
    console.log("Data of Users: ", data)
    await User.add(data)
    res.send({msg: "User Added"})
})

app.listen(4000, () => console.log("Up and running 4000"))