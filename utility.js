module.exports={
    getcurrentTime : function()
{   
    var d=new Date(); // fetches the current date
    var n=d.getTime(); // fetches current time
    return n;
},
getelapsedTime : function(startTime,stopTime)
{
    var elapsed = (stopTime-startTime)/1000; // elapsed time from start to stop
    return elapsed;
},
    /**
     * @description : Take 2 Strings as Input and Check for Anagrams
     * @param : (str0 and str)strings
     */
    anagram : function(str0,str)
    {   
        if(!NaN)
        {
            
        var s1 = str0.toLowerCase().split('').sort().join('').trim();
        var s2 = str.toLowerCase().split('').sort().join('').trim();
        
        if(s1===s2) // if resultant strings are equal
        {
            console.log('Its an Anagram')
        }
        else
        {
            console.log('Not an Anagram')
        }
    }
    else 
    {
        console.log('Not a String')
    }
},
    /**
     * @description : Prints numbers between min and max
     * @param : numbers (min and max)
     */
    primenos : function(min,max)
    {

        if (min > max) //if entered from gh to low , swap numbers
        {
            temp = min;
            min = max;
            max = temp;
        }

    var  i, flag=0
    while (min < max)  
    {
        flag = 0;

        for(i = 2; i <= min/2; ++i) 
        {
            if(min % i == 0) //check if number is divisible and leaves remainder 0
            {
                flag = 1;
                break;
            }
        }

        if (flag == 0 && min!=0)
            console.log(min);

        ++min; //increment min number
    }

    return 0;

},
    /**
     * @description : prints palindromic - anagrams between provided range
     * @param :range in integers , (min and max)
     */
 primePalin : function(min , max){
    var char = min
    if (min > max) 
    {
        temp = min;
        min = max;
        max = temp;
    }

var  i, flag=0
while (min < max)
{
    flag = 0;

    for(i = 2; i <= min/2; ++i)
    {
        if(min % i == 0)
        {
            flag = 1;
            break;
        }
    }

    if (flag == 0 && min!=0)
       { 
         if(min.toString().split('').reverse().join('')==min && char.toString().split('').sort().join('').trim())
         console.log(min)
       }
       ++min;
}

return 0;

 },

     /**
     * @description : Searches integer using binary search algorithm
     * @param : size of array(number)
     */
 binary : function(number)
 {      
        var prompt=require('prompt-sync')()
        var arr = new Array(number);
        var check = 0; 
        for(var i=0;i<number;i++) // prompt integers
        {
            arr[i] = prompt('Enter the numbers : ')
        }

        arr.sort();
        console.log(arr)
        var low = 0,high =number-1;
        var key = prompt('Enter the element to be searched : ') // set key value
        
        while(low<=high)
        {
            var mid = Math.floor((low+high)/2)
            if(key == arr[mid]) //if key = mid , element found!!!!
            {
                check = 1 ;
                break;
            }
            else 
            {
                if (key > arr[mid])
                    low = mid + 1 // set low after mid
                else 
                    high = mid - 1   // set high before mid
            }

        }
        if(check==1)
        console.log('Element found at index '+ mid)
        
        else 
        console.log('Not found ')
        return 0;
        
    },
    /**
     * @description : prints ascending order of arrary
     * @param : size of arrary (number)
     */
  bubble : function(number)
  {     var prompt = require('prompt-sync')()
        var temp;
        var num;
        var arr = new Array(number) // create new Arrary()
        num=number
        for(var i=0;i<number;i++)
        {
            arr[i]=prompt('Enter ' + num-- + ' element(s) : ') 
        }
    
       for(var i=0;i<arr.length-1;i++)
        {
        
             for(var j=0;j<arr.length-1-i;j++)
             {
                 if(arr[j]>arr[j+1])
                 {
                     var temp=parseInt(arr[j]); //swap the integers if greater
                     (arr[j])=parseInt(arr[j+1]);
                     (arr[j+1])=temp;
                 }
             }
        }   
            console.log('Sorted array')
            console.log(arr)
        
  },
     /**
     * @description : performs ascendind order sort of inputted integers
     * @param : size of arrary (number)
     */
  insertionSort : function(number)
{
  var c, d, t;
  var array = new Array(number)
  var prompt = require('prompt-sync')()
  for (c = 0; c < number; c++) 
  {
        array[c] = prompt('Enter the elements') // input the integers
  }
    console.log(array)
    for (c = 1 ; c <= number - 1; c++) 
    {
         d = c;
 
      while ( d > 0 && array[d-1] > array[d]) 
      {
        t  = parseInt(array[d]);
        array[d]  = parseInt(array[d-1]); // swap
        array[d-1] = t;
        d--;
     }
  }
 
    console.log("Sorted list in ascending order:\n");
 
    console.log(array);

    return 0;
},
     /**
     * @description : searches the string from a text file 
     * @param : array , string to be searched (toSearch)
     */
wordsList : function(arr,toSearch)
{   
    arr=arr.sort();
    console.log(arr)
    var check =0
    var low = 0,high = (arr.length-1);
    while(low<=high)
    {
        var mid = Math.floor((low+high)/2)
        if(toSearch == arr[mid])
        {
            check = 1 ;
            break;
        }
        else 
        {
            if (toSearch > arr[mid])
                low = mid + 1
            else 
                high = mid - 1   
        }

    }
    if(check==1)
    console.log('Element found at index '+ mid)
    
    else 
    console.log('Not found ')
    return 0;
    
},
    /**
     * @description : calculates the monthly payment using the formula
     * @param : principal ,years, rate)
     */
payment : function(principal,years,rate)
{   
    var r = rate/(12*100)
    var n = years * 12
    var payment = (principal*r)/(1-Math.pow((1+r),-n))
    console.log('Monthly Payment is ' +payment)
    
},
    /**
     * @description : calculation of square root of given number using newtons method
     * @param : number
     */
newtonMethod : function(number)
{
    if(number>=0)
    {
        var epsilon = 1e-15 //fixed value of epsilon
        var t=number;
        while(Math.abs(t-number/t)>epsilon*t)
        {
            t = (number/t + t)/2.0 //formula
        }
        console.log('Square root of given number : ' + t) // o/p : square root of the number 
    }
    else
    {
        console.log('Not a positive number')    
    }
},
    /**
     * @description : calculates the minimum number of notes to be returned by the vending machine
     * @param : cash (amount)
     */
notes : function(amount)
{
    var count=0;
    value=1;
    switch(value)
    {
        case 1 : if(amount/1000>=1) // case for 1000 note
                    {   
                        var res =Math.floor(amount/1000)
                        console.log('Number of 1000 notes : ' +res)
                        amount=amount-(res*1000)
                        count=count + res                    
                    }
                
        case 2 : if(amount/500>=1)  // case for 500 note
                    {
                        var res1=Math.floor(amount/500)
                        console.log('Number of 500 notes : '+res1)
                        amount=amount-(res1*500)
                        count=count + res1
                    }
        case 3 : if(amount/100>=1)  // case for 100 note
                    {
                        var res2=Math.floor(amount/100)
                        console.log('Number of 100 notes : '+res2)
                        amount=amount-(res2*100)
                        count=count + res2
                    }
        case 4 : if(amount/50>=1)   // case for 50 note
                    {
                        var res3=Math.floor(amount/50)
                        console.log('Number of 50 notes : '+res3)
                        amount=amount-(res3*50)
                        count=count + res3
                    }
        case 5 : if(amount/10>=1)   // case for 10 note
                    {
                        var res4=Math.floor(amount/10)
                        console.log('Number of 10 notes : '+res4)
                        amount=amount-(res4*10)
                        count=count + res4
                    }
        case 6 : if(amount/5>=1)    // case for 5 note
                    {
                        var res5=Math.floor(amount/5)
                        console.log('Number of 5 notes : '+res5)
                        amount=amount-(res5*5)
                        count=count + res5
                    }  
        case 7 : if(amount/2>=1) // case for 2 note
                    {
                        var res6=Math.floor(amount/2)
                        console.log('Number of 2 notes : '+res6)
                        amount=amount-(res6*2)
                        count=count + res6
                    }
        case 8 : if(amount/1>=1)    // case for 1 note
                    {
                        var res7=Math.floor(amount/1)
                        console.log('Number of 1 notes : '+res7)
                        count=count + res7
                    }                     
    }
    count=parseInt(count);
    console.log('Total number of notes that the machine should provide is : ' + count)
},
    /**
     * @description : sorts the integer , using divide and conquer method 
     * @param : size
     */
mergeSort : function(size)
{
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
           // console.log("before merge arr len "+arr.length);
            this.merge((arr));
            //console.log("after merge arr len "+arr.length);
            arr.forEach(element =>
                {
            
                    console.log(parseInt(element));
                });
    },  
    merge : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt(arr[i]);
            
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(arr[i]);
            
        }
        this.merge(a1);
        this.merge(a2);
        this.merger(a1,a2,arr);
    },
    merger : function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
},
    /**
     * @description : converts the decimal number into binary
     * @param : number
     */
toBinary : function(number)
{
    if(number ==0)
    {
        console.log(0);
    }
    else
    {
        var arr = [],i;    
      
    for(i=0;number>0;i++)    
    {    
        arr[i]=Math.floor(number%2); //remainder into array   
        number=Math.floor(number/2); // quotient into number
    }    
    console.log("\nBinary of Given Number is=");     
   // for(i=arr.length-1;i>=0;i--)
    console.log(arr.reverse());       
    return 0;
    }
      
},
    /**
     * @description : swaps the nibble with next / previous 4 bits and checks if resultant is power of 2
     * @param : number
     */
nibbleSwap : function(number)
{   
    var flag=0
    var temp1 , temp2 
    temp1 = number & 0x0F
    temp2 = number & 0xF0
    temp1 = temp1 << 4 // left shift 
    temp2 = temp2 >> 4 // right shift
    console.log(temp1|temp2)
    var result = temp1|temp2
        for(n=result ; n>0 ;n--)
        {
            if(result==Math.pow(2,n)) // checking if the number is power of 2
            {
                flag=1
                break     
            }
        }
        if(flag==1)
        console.log('Number is power of ' + (n))   // o/p 
        else
        console.log('Not a power of 2')
},
    /**
     * @description : returns the day on which the provided date falls
     * @param : date,month,year
     */
calender : function(date,month,year)
{   
    var d,m,y,x;
    y = year-Math.floor((14-month)/12)  //formula for calculating the day
    y = parseInt(y)
    x = y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400)
    x = parseInt(x)
    m = month + 12 * Math.floor((14-month)/12) -2
    m = parseInt(m)
    d = ((date + x + Math.floor(((31*m) / 12))) % 7)
    d = parseInt(d)

    switch(parseInt(month))
    {
        case 1 : console.log('January') //cases for months of an year
                    break;
        case 2 : console.log('February')
                    break;
        case 3 : console.log('March')
                    break;
        case 4 : console.log('April')
                    break;
        case 5 : console.log('May')
                    break;
        case 6 : console.log('June')
                    break;
        case 7 : console.log('July')
                    break;
        case 8 : console.log('August')
                    break;
        case 9 : console.log('September')
                    break;
        case 10 : console.log('October')
                    break;
        case 11 : console.log('November')
                    break;
        case 12 : console.log('December')
                    break;
    }
    switch(d) 
    {
        case 0 : console.log('Day is Sunday') //cases for day of the week
                 break;
        case 1 : console.log('Day is Monday')
                 break;
        case 2 : console.log('Day is Tuesday')
                 break;
        case 3 : console.log('Day is Wednesday')
                 break;
        case 4 : console.log('Day is Thursday')
                 break;
        case 5 : console.log('Day is Friday')
                 break;
        case 6 : console.log('Day is Saturday')
                 break;
    }
},
    /**
     * @description : aks a command­line argument N,asks you to think of a number between 0 and N­1,
     * where N = 2^n,and always guesses the answer with n questions
     * @param : number 
     */
guessNumber : function(number)
{
    var prompt =require('prompt-sync')()
    var n = Math.pow(2,number)
    console.log('Think of a number between 0 and ' + n )
    var low = 0;
    var high = n;
    var secret = this.question(low,high)
    console.log('Your number is '+secret)
},
question : function(low ,high) //function for binary searching of the integer
{
    var prompt =require('prompt-sync')()
    if ((high - low) == 1) 
    return low;
    else
    var mid =low + (high-low) / 2; //calculates the middle
    console.log("Is it less than  " , +mid)
    var choice = prompt('Enter the choice in true or false : ')
    if(choice ==='true')
    {
        return this.question(low,mid)
    }
    else if(choice === 'false')
    {
        return this.question(mid,high)
    }
    else
    {
        console.log('Not valid') // not a valid option
    }
},
     /**
     * @description : searches the input string using binary search
     * @param : the size of the array (number)
     */
binaryString : function(number)
 {      
        var prompt=require('prompt-sync')()
        var arr = new Array(number);
        var check = 0; 
        for(var i=0;i<number;i++)
        {
            arr[i] = prompt('Enter the numbers : ') // prompts the elements of the array
        }

        arr.sort();
        console.log(arr)
        var low = 0,high =number-1;
        var key = prompt('Enter the element to be searched : ') //set key value
        
        while(low<=high)
        {
            var mid = Math.floor((low+high)/2) // mid inder of the array
            if(key == arr[mid])
            {
                check = 1 ;
                break;
            }
            else 
            {
                if (key > arr[mid])
                    low = mid + 1
                else 
                    high = mid - 1   
            }

        }
        if(check==1)
        console.log('Element found at index '+ mid)  //o/p the index
        
        else 
        console.log('Not found ')
        return 0;
        
    },
    /**
     * @description : bubble sort method for strings
     * @param : number
     */
    bubbleString : function(number)
  {     var prompt = require('prompt-sync')()
        var temp;
        var num;
        var arr = new Array(number) // create new array
        num=number
        for(var i=0;i<number;i++)
        {
            arr[i]=prompt('Enter ' + num-- + ' element(s) : ')
        }
    
       for(var i=0;i<arr.length-1;i++)
        {
        
             for(var j=0;j<arr.length-1-i;j++)
             {
                 if(arr[j]>arr[j+1])
                 {
                     var temp=(arr[j]); // swapping of strings
                     (arr[j])=(arr[j+1]);
                     (arr[j+1])=temp;
                 }
             }
        }   
            console.log('Sorted array')
            console.log(arr)
  
},
    /**
     * @description : insertionSort method for strings
     * @param : number
     */
insertionSortString : function(number)
{
  var c, d, t;
  var array = new Array(number)
  var prompt = require('prompt-sync')()
  for (c = 0; c < number; c++) 
  {
        array[c] = prompt('Enter the elements') // push elements int array
  }
    console.log(array)
    for (c = 1 ; c <= number - 1; c++) 
    {
         d = c;
 
      while ( d > 0 && array[d-1] > array[d]) 
      {
        t  = (array[d]);
        array[d]  = (array[d-1]); // swapping the strings
        array[d-1] = t;
        d--;
     }
  }
 
    console.log("Sorted list in ascending order:\n");
 
    console.log(array);

    return 0;
},
}  

