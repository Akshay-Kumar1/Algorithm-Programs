var prompt = require('prompt-sync')()
//var utility = require ('/home/adminsitrator/Documents/akshayk/algorithm programs/utility/utility.js')

function temperature()
{   
    var choice
    var celsius
    var fahrenheit ,cresult , fresult
    
    var prompt = require('prompt-sync')()
    while(1)
    {
         celsius = prompt('Enter the temperature in celsius : ');
         fahrenheit  = prompt('Enter the temperature in Fahrenheit : ')
    
        console.log('1.Convert Celsius to Fahrenheit.........')
        console.log('2.Convert Fahrenheit to Celsius.........')
        choice = prompt('Choice : ')
    
    switch(choice)
    {   

        case '1' :  cresult =  Math.floor((celsius * 9/5) + 32); 
                    console.log(cresult + ' F ');
                    break;
        case '2' :  fresult = Math.floor ((fahrenheit - 32) * 5/9);
                    console.log(fresult + ' C ');
                    break;
        default :   console.log('Invalid Entry')
                    return -1;

    }
}

}
temperature()