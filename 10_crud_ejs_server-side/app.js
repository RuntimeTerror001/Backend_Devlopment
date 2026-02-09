const express  = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",(req,res) => {
    res.render("index");
})

app.get("/read", async (req,res) => {
  let users = await  userModel.find();
  res.render("read", {users});
})

app.get("/edit/:id", async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.render("edit", { user });
});

app.post("/update/:id", async (req, res) => {
  let {image, name, email} = req.body;
  const user = await userModel.findOneAndUpdate({_id: req.params.id}, {image, name, email}, {new:true});
  res.redirect("/read");
});


app.get("/delete/:id", async (req,res) => {
  let users = await  userModel.findOneAndDelete({_id: req.params.id});
  res.redirect("/read");
})

app.post("/create", async (req,res) => {
    let {name, email, image} = req.body;
 let createduser = await userModel.create({
name,
email,
image
 });

 res.send(createduser);
})

app.listen(3000);