//CONDITIONAL STATEMENT   || CONTROL FLOW

const age = 15

//if(condition){
//    console.log("object");
//}

if(age > 15){
    console.log('You are older then 15');
}
else if(age < 15){
    console.log('You are less than 15');
}else{
    console.log('You are 15 years');
}

const year = 1990

if(year > 2023){
    console.log("You can't be born in the future");
}
else if(year < 1990){
    console.log("You are allowed to enter the year between 1990 till data");
}else{
    const myAge = 2023 -year
    console.log(myAge);
}




const password = "orange1"
const confirmpassword = "orange1"

if(password.length <= 6){
    console.log("password can not be less then 6 character");
 // password should be more then 6 characters   
}
else if(password !== confirmpassword){
    console.log("password do not match");
}else{
    console.log("Login successful");
}


// username: check if username is empty
// username: check if password is empty
// password: check if password is less than 5 character
// confirmpassword: check if the confirm password is the same with password
// your username is _________ and your password is _________
// Welcom ___________ your password is __________

const username = ""

if(username === ""){
    console.log("Your nsername should be empty");
}
else if(username !== ""){
    console.log("username muct not be empty");
}else{
    console.log("empty");
}

