// Coding Exercise 35: 
//----------------------
function printHeart() {
    console.log('<3');
}
printHeart();

/**************************************************************/

// Coding Exercise 36:
//----------------------
function rant(message) {
    console.log(`${message.toUpperCase()}`);
    console.log(`${message.toUpperCase()}`);
    console.log(`${message.toUpperCase()}`);
}
rant('I hate beets');

/**************************************************************/

// Coding Exercise 37:
//----------------------
function isSnakeEyes(side1, side2) {
    if (side1 === side2 && side1 === 1) {
        console.log('Snake Eyes!');
    }else {
        console.log('Not Snake Eyes!');
    }
}

/**************************************************************/

// Coding Exercise 38:
//----------------------
function multiply(x,y) {
    let sum = x * y;
    return sum;
}

/**************************************************************/

// Coding Exercise 39:
//----------------------
function isShortsWeather(temperature) {
    if(temperature >= 75){
        return true;
    }else{
        return false;
    }
}

/**************************************************************/

// Coding Exercise 40:
//----------------------
function lastElement(num){
    if (num && num.length>0){
        return num[num.length -1]
    }
     return null
 }

/**************************************************************/

// Coding Exercise 41:
//----------------------
function capitalize(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let restWord = str.slice(1);
    let result = firstLetter+restWord;
    return result;
}

/**************************************************************/

// Coding Exercise 42:
//----------------------
function sumArray(array) {
    let sum = 0;
    for (let i=0; i< array.length; i++){
        sum += array[i];
    }
    return sum;
}
/**************************************************************/

// Coding Exercise 43: (2 Methods)
//---------------------------------
//First Method:
function returnDay(dayNum) {
    let weekDays = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    
    let dayEntry = Object.values(weekDays)[dayNum - 1];
    if (dayNum < 1 || dayNum > 7){
        return null;
    } 
    return dayEntry;
}

//---------------
//Second Method: 
function returnDay(dayNum) {
    switch (dayNum){
        case 1 : return 'Monday';
        case 2 : return 'Tuesday';
        case 3 : return 'Wednesday';
        case 4 : return 'Thursday';
        case 5 : return 'Friday';
        case 6 : return 'Saturday';
        case 7 : return 'Sunday';
        default : return null;
    }
}



//**********************************/
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//**********************************/