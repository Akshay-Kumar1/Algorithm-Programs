var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function bubble()
{
        var number = prompt('Enter the size : ')
        start = utility.getCurrentTime()
        utility.bubble(number)
        stop = utility.getCurrentTime()
        res = utility.getElapsedTime(start,stop)
        console.log('Elapsed time ' + res + 'secs ')
}
bubble()