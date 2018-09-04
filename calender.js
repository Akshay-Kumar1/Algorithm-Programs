var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function calender()
{
    var date = prompt('Enter the date : ')
    date = parseInt(date)
    var month = prompt('Enter the month : ')
    month = parseInt(month)
    var year = prompt('Enter the year : ')
    year = parseInt(year)
    utility.calender(date,month,year)
    
}
calender()
