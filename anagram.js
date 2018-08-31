var prompt = require('prompt-sync')();
var utility = require('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function anagram ()
{
    var str0 = prompt('Enter the string : ');
    var str = prompt('Enter the string : ');
    utility.anagram(str0,str);
}
anagram();
