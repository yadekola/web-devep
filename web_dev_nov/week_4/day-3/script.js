// OBJECT






///const user = {
    //firstname:"Hanafi",
    //lastname:'Taofiq',
    //age: 20,
    //gender:"male"
//}





//const {age, ...otherinfo} = user

//console.log(otherInfo)

//console.log(user.firstname);

//DISSTRUCTURING OR STRUCTURING

//console.log(`Hello i am ${user.firstname} and my age is ${user.age}`)

//const {firstname, age} = user





//ARRAYS
                //  0        1        2          3            4
//const fruits = ["orange", "apple", "cherru", "pineapple", "Bannans"]




//console.log(fruits[3])
//fruits.push("water melon", "grapes", "date", "pear", "pawpaw")
//push add for my the end of the arrays
//fruits.unshift("Mango", "Cucumber", "Tomato", "Onion")
//unshift is to add for the top of the arrays
//fruits.pop()
//pop is to less or remove for the end of arrays
//fruits.shift()
//shift is to less or romove for the top of arrays


const myname = "orangetech.png.osa.png"
const nameArray = myname.split(".")
const lastindex = nameArray.pop()
if(lastIndex !== 'png'){
    console.log("File not supported!");
}else{
    console.log("File supported");
}

//console.log(myname.);


//console.log(fruits)
