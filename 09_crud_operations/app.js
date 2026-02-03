const express =  require('express');
const app = express();

const userModule = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req,res) => {
    res.send('hello');
})

app.get('/create', async (req,res) => {
  let createduser =  await usermodel.create({
        name:"Aahaan",
        email: "gmail.com",
        username: "runtimeterror"
    })
    res.send(createduser);
})

app.get('/update', async (req,res) => {
let updateduser = await usermodel.findOneAndUpdate({username: "runtimeterror"}, {name: "Sethi"}, {new:true});
    res.send(updateduser);
})

app.get('/read', async (req,res) =>{
    let users = await usermodel.find();
    res.send(users);
})

app.get('/delete', async (req,res) => {
    let deleteduser = await usermodel.findOneAndDelete({name:"Aahaan"});
    res.send(deleteduser);
})

app.listen(3000);