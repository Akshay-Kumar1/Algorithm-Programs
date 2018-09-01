var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function newtons()
{   
    var c = prompt('Enter non negative number : ');
    utility.newtons(c)
}
newtons()