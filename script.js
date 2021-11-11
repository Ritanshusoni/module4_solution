var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
function firstJ(){
    for (let i=0;i<names.length;i++)
    if (names[i].startsWith("J") || names[i].startsWith("j")) {
        
        console.log("GoodBye",names[i]);
    }
    else{
        console.log("Hello", names[i])
    }
}
  
  firstJ()