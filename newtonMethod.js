var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function newtonMethod()
{   
    var number = prompt('Enter non negative number : ');
    utility.newtonMethod(number)
}
newtonMethod()