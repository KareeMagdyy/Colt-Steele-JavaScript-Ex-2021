// Coding Exercise 51:
//----------------------
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');

/**************************************************************/

// Coding Exercise 52:
//----------------------
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type="checkbox"]');

/**************************************************************/

// Coding Exercise 53:
//----------------------
const span1 = document.querySelector('span');
span1.innerText = 'Disgusting';

/**************************************************************/

// Coding Exercise 54:
//----------------------
const eggImg = document.querySelector('#egg');

eggImg.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');
eggImg.alt = 'chicken';

/**************************************************************/

// Coding Exercise 55:
//----------------------
const container = document.querySelector('#container');
const img = document.querySelector('img');

container.style.textAlign = 'center';

img.style.width = '150px';
img.style.borderRadius = '50%';

/**************************************************************/

// Coding Exercise 56:
//----------------------
const sp = document.querySelectorAll('span');

sp.forEach((sp, i) => {
    sp.style.color = colors[i];
});

/**************************************************************/

// Coding Exercise 57:
//----------------------
const list = document.querySelectorAll('li');

for (let items of list) {
    items.classList.toggle('highlight');
}

/**************************************************************/

// Coding Exercise 58:
//----------------------
const divParent = document.querySelector('div'); 

for (let i=0; i < 100; i++){
    let newBtn = document.createElement('button');
    newBtn.innerText = 'Hey!';
    divParent.appendChild(newBtn);
}



//**********************************/
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//Coded by Kareem Magdy El-Zomor ***
//**********************************/