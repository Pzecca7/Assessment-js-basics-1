///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// First, I set totalAcres = to zero prior to running each for loop the given week. It basically means at the start of the week zero total acres have been picked.

let totalAcres = 0

// Next, I did a for loop for each type of apple on the orchard where I set our totalAcres variable equal to totalAcres + the value of the corresponding index in each array. so for example the first time we run the loop in fujiAcres it is 0+2 =2. The next time it runs it is 2+3=5 because totalAcres value is now 2 and we are adding fujiAcres[1] to it now. 



for ( i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i]
}

console.log(totalAcres)

for ( i = 0; i < galaAcres.length; i++){
    totalAcres += galaAcres[i]
}

console.log(totalAcres)

for ( i = 0; i < pinkAcres.length; i++){
    totalAcres += pinkAcres[i]
}



console.log(totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE


// to calculate the average acres per day we just have to take our totalAcres and divide it by the number of days in the week.

averageDailyAcres = totalAcres/(fujiAcres.length + galaAcres.length + pinkAcres.length)*3

console.log(averageDailyAcres)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Everytime acresLeft is above zero we run this while loop to see how many more days it will take to pick the remaining 174 acres. Setting acresLeft to acresLeft - acerageDailyAcres means 174-9 each loop and at the same time we increase the days variable by 1. Until acresLeft finally reaches zero, this loop will increase the days by 1 and we get how many days needed to pick the remaing amount.

while (acresLeft > 0){
    acresLeft = acresLeft - averageDailyAcres
    days ++
}

console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// here we just push the variables into new Tons arrays from the orginal acre arrays. To do this we run for loops that say to mutiply the acre variable at each index by 6.5 and then push it into the new array.

let fujiTons = []
let galaTons = []
let pinkTons = []


for (i = 0; i < fujiAcres.length; i++){
fujiTons.push(fujiAcres[i] * 6.5)


}


for (i = 0; i < galaAcres.length; i++){
    galaTons.push(galaAcres[i] * 6.5)
    
}

for (i = 0; i < pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * 6.5)
    
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

fujiTons = [13, 19.5, 19.5, 13, 13, 13, 6.5]
galaTons = [32.5, 13, 26, 19.5, 39, 13, 26]
pinkTons = [6.5, 32.5, 26, 13, 6.5,  32.5, 26]



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//Similar to the last problem, here we just run 3 for loops looking for the total number of pounds for the week instead of Tons per day formatted in an array. Each loop will output one vlaue which will be the total pounds for the week for each type of apple.

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (i = 0; i < fujiTons.length; i++){
    fujiPounds = fujiPounds + (fujiTons[i] * 2000)
}

for (i = 0; i < galaTons.length; i++){
    galaPounds = galaPounds + (galaTons[i] * 2000)
}

for (i = 0; i < pinkTons.length; i++){
    pinkPounds = pinkPounds + (pinkTons[i] * 2000)
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// PROBLEM 6



/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//  To get the profits of each apple we just have to multiply the price per pounds (which was defined at the start) by the total pounds (which we calculated for each apple in the previous problem). If we had expenses we would then have to subtract that out from our revenues to get the profits.



let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// Finally to get the total profit of the orchard for this week we just add all three profits together.

let totalProfit = (fujiProfit + galaProfit + pinkProfit)

console.log(totalProfit)

// CODE HERE
