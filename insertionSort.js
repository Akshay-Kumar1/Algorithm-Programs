
var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function insertionSort(){
    var number = prompt('Enter the size :');
    start = utility.getCurrentTime()
    utility.insertionSort(number)
    stop = utility.getCurrentTime()
    res = utility.getElapsedTime(start,stop)
    console.log('Elapsed time ' + res + 'secs ')
}
insertionSort();