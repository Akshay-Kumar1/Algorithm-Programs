var prompt = require('prompt-sync')();
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function payment()
{
    var principal = prompt('Enter Principal Amount (in Rupees): ')
    var years = prompt('Enter the years : ')
    var rate = prompt('Enter the rate of interest (%): ')
    utility.payment(principal,years,rate)
}
payment();