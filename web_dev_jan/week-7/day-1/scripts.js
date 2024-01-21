const week =  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
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
    greeting.textContent = ` After working for three days, everyone loses their spirit to work until the end of the week.`
} else if(week[getday] === "Thursday"){
    greeting.textContent = ` May the Lord bless you with drive not for power and wealth,but for the growth of your soul.`
} else if(week[getday] === "Friday"){
    greeting.textContent = ` May you find success in everything you do.`
} else if(week[getday] === "Saturday"){
    greeting.textContent = ` Embrace the day withopen arms and let positivity be your guiding light.`
} else if(week[getday] === "Sunday"){
    greeting.textContent = ` May all your Sundays be happy days for you`
}