const fs = require('fs');
fs.writeFile("hey.txt", "hi", function(err){
    if(err) console.error(err);
    else console.log("done");
})

fs.appendFile("hey.txt", "I am Aahaan", function(err){
    if(err) console.error(err);
    else console.log("done");
}) // appendfile is adding more data to exsisting

fs.rename("hey.txt", "hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
    })

fs.copyFile(__dirname + "/hello.txt", __dirname + "/copy/copy.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})
 
fs.unlink(__dirname + "/hello.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");
    })

fs.rm("./copy", {recursive: true , force : true} ,function(err){
    if(err) console.error(err);
    else console.log("removed");
    })    

fs.readFile(__dirname + "/hey.txt" , function(err){
    if(err) console.error(err);
    else console.log("read");
    })    