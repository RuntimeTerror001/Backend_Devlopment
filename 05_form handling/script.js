const express  = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// creating routes
app.get("/", function(req,res){
res.send("Ironman");
})

app.get("/profile", function(req,res,next){
    return next(new Error("Something went wrong!"))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})




app.listen(3000);