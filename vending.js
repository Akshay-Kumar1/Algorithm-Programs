var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function notes()
{   
    var amount = prompt('Enter amount : ');
    utility.notes(amount)
}
notes()