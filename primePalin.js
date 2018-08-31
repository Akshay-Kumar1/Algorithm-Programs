var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')
 
function primePalin(){
    var min = prompt('Enter the number :')
    var max = prompt('Enter the number :')
    utility.primePalin(min,max)
}
primePalin()