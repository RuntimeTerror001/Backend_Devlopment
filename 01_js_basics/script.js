var arr = [1,2,3,4,5];

//arr.forEach(function(val){
//    console.log(val + " Hello");
//    });

//arr.map(function(val){
//    console.log(val + 12);
//    })  
    

//arr.find(function(val){
//    if(val == 2 ) return val;
//})

var ans  = arr.filter(function(val){
    if(val > 3) {return true;}
    else {return false;}
})    

console.log(ans);



var obj = {
    name: "Aahaan",
    age: 25,
    
}
Object.freeze(obj); // if we don;t what the value in object to change later
obj.age = 21;



function abcd(a,b,c){   // fucntion length abcd.length gives no. of parameters that is the length of the function

}


// code running line by line is called synchornous 
// asynchorinous is any code which is async nature send it to side stack and run next code which is of sync nature , after all sync code runs then check foor async code completed or not if completed send it to main stack and run
// code in side stack is'nt executed but it can be processed there

async function ab(){
 var blob = await fetch(`https://randomuser.me/api`);
 var ans = await blob.json();
 console.log(ans.results);
 
}
ab();


