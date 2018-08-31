var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function primenos(){
        
        console.log('Enter the range ');
        var min = prompt('Enter first number : ');
        var max = prompt('Enter second number : ');
        utility.primenos(min,max)
}
primenos()