var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function mergeSort()
{
    var size = prompt('Enter the size : ')
    utility.mergeSort(size)
}
mergeSort()