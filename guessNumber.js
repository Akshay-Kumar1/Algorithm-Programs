var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function guessNumber()
{
    var number = prompt('Enter the number : ')
    utility.guessNumber(number);
}
guessNumber()