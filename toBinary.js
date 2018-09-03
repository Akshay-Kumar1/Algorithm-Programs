var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function toBinary ()
{
    var number = prompt('Enter the number (in decimal) : ')
    utility.toBinary(number)
}
toBinary()