function getTime() {
    const getHour = new Date().getHours()
    const getMinute = new Date().getMinutes()
    const getSecond = new Date().getSeconds()

    const hour = document.querySelector('#hour')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')

    hour.textContent = getHour
    minutes.textContent = getMinute
    seconds.textContent = getSecond
    
    
    if (getHour > 12){
        const currentHour = getHour % 12
        hour.textContent = `0${currentHour}`
        //hour.textContent = `${getHour} % 12`
    } else if(getMinute < 10){
        minutes.textContent = `0${getMinute}`
    } else if(getSecond < 10){
       seconds.textContent = `0${getSecond}` 
    } else if(getHour >= 12){
        greeting.textContent = `Good Afternoon Orange`
    } else if(getHour < 12){
        greeting.textContent = `Good Morning Orange`
    } else if(getHour % 12 >= 4){
        greeting.textContent = `Good Evening Orange`
    } else if(getHour % 12 >= 8){
        greeting.textContent =`Good Night Orange`
    } else if(getHour < 10){
        hour.textContent = `0${getHour}`
    }

    // else if(getHour > 9){
    //     hour.textContent = `${getHour}`
    // } else if(getHour < 12){
    //     hour.textContent = `0${getHour}`
    // }
}

// set time out  get exptcuted when it at the time you set and 
//set interval

setInterval(()=>{
    getTime()
}, 1000)


const week =  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]






const getday = new Date().getDay()
const getmonth = new Date().getMonth()
const getdate = new Date().getDate()
const getyear = new Date().getFullYear()

const day = document.querySelector('#day')
const month = document.querySelector('#months')
const today = document.querySelector('#today')
const year = document.querySelector('#year')


day.textContent = week[getday]
month.textContent = months[getmonth]
today.textContent = getdate
year.textContent = getyear


console.log(week[getday]);
console.log(months[getmonth]);
console.log(today);
console.log(`Today's date is: ${today}/${months[getmonth]}/${year}`);

if(week[getday] === "Monday"){
    console.log('Happy new week');
    greeting.textContent = `Happy new Week`
} else if(week[getday] === "Tuesday"){
    greeting.textContent = `Have a lovely day, and give thanks for the wonderful quality you possess.`
} else if(week[getday] === "Wednesday"){
    greeting.textContent = `After working for three days, everyone loses their spirit to work until the end of the week.`
} else if(week[getday] === "Thursday"){
    greeting.textContent = `May the Lord bless you with drive not for power and wealth,but for the growth of your soul.`
} else if(week[getday] === "Friday"){
    greeting.textContent = `May you find success in everything you do.`
    console.log('May you find success in everything you do');
} else if(week[getday] === "Saturday"){
    greeting.textContent = `Embrace the day withopen arms and let positivity be your guiding light.`
} else if(week[getday] === "Sunday"){
    greeting.textContent = `May all your Sundays be happy days for you`
}

// const date = document.querySelector(".Date")
// date.innerHTML=getDate()
// console.log(getDate());