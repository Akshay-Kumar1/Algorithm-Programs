var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function binary(){
    var number = prompt('Enter the size : ');
    utility.binary(number)
}
binary()