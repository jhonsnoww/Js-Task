
var fruits =["Apple","Banana","Orange"];
var numbers =[89,90,20,199];

  var nus = numbers.map((e)=>{
    if(e > 40){
        return e;
    }
           
})
console.log("Map")
console.log(nus);

var numsFilter = numbers.filter((e)=>{
    if(e > 50){
        return true;
    }
    return false;
})
console.log("Filter")
console.log(numsFilter);