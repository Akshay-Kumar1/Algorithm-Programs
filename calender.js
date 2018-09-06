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
    if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0) //logic to find leap year
    {
        if (date > 0 && date < 32 && month  <=12)
        {
            utility.calender(date, month , year);
        }
        else
        {
            console.log("Invalid date");
        }
    }
    else if (date >= 29 && month == 2)
    {
        console.log("Date doesn't exsit");
    }
    else if (date >= 31 && (month == 4 || month ==6 || month ==9 || month == 11))
    {
        console.log("Invalid date");
    }
    else if(date > 0 && date < 32)
    {
        utility.calender(date, month , year);
    }
    else
    {
        console.log("Invalid date");
    }
}      
calender();

