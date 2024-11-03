let class1;
let class2;
let clickedType;
let clickedTypeItem;


const tiffinEle = document.querySelector('.tiffin');
const lunchEle = document.querySelector('.lunch');
const dinnerEle = document.querySelector('.dinner');
const tiffinContentEle = document.querySelector('.tiffin-content');
const lunchContentEle = document.querySelector('.lunch-content');
const dinnerContentEle = document.querySelector('.dinner-content');
const displayIngreEle = document.querySelector('.displaIngreInside');
const buttonEle = document.querySelector('.lets');
const messageEle = document.querySelector('.message');
const topIngreEle = document.querySelector('.top-ingre')
const selectedItemsEle = document.querySelector('.selected-items');
const listOfItemsEle = document.querySelector('.list-of-items');
const selectedList = document.querySelector('.selected');
const backButtonEle = document.querySelector('.back-button');
const submitEle = document.querySelector('.submit');
const errorMessageEle = document.querySelector('.display-error-message');
const addedItemsEle = document.querySelector('.added-items');
const messageAboutContentEle = document.querySelector('.message-about-content');
const congraMessageEle = document.querySelector('.congra-message');
const displayIngreEle2 = document.querySelector('.displayIngre');
const ingreElementsArray = [];
const selectedElementsArray = [];

const tiffinIngredients = [
  "rice", "urad dal", "salt", "water", "baking soda",    // Idli
  "urad dal", "ginger", "green chilies", "curry leaves", "salt",    // Vada
  "rice", "urad dal", "fenugreek seeds", "salt", "water",    // Dosa
  "wheat flour", "salt", "water", "oil", "semolina",    // Poori
  "potato", "chickpea flour", "curry leaves", "green chilies", "spices"    // Bonda
];

const lunchIngredients = [
  "tamarind", "tomato", "black pepper", "cumin seeds", "coriander leaves",   // Rasam
  "toor dal", "tamarind", "sambar powder", "vegetables", "mustard seeds",    // Sambar
  "rice", "water", "salt", "ghee", "cumin seeds",                            // Rice
  "lentils", "turmeric", "cumin seeds", "garlic", "ghee",                    // Dal
  "basmati rice", "chicken or vegetables", "yogurt", "spices", "mint leaves" // Biryani
];

const dinnerIngredients = [
  "brinjal", "onion", "tomato", "mustard seeds", "spices",          // Brinjal Curry
  "rice", "vegetables", "soy sauce", "spring onions", "oil",        // Fried Rice
  "rice", "lemon", "turmeric", "curry leaves", "mustard seeds",     // Lemon Rice
  "rice", "tamarind", "peanuts", "curry leaves", "turmeric",        // Tamarind Rice
  "raw mango", "mustard seeds", "red chili powder", "salt", "oil"   // Mango Pickle
];

function displayElementNone() {
  tiffinContentEle.style.display = 'none';
  lunchContentEle.style.display = 'none';
  dinnerContentEle.style.display = 'none';
}


function displayElement(name) {
  tiffinContentEle.style.display = 'none';
  lunchContentEle.style.display = 'none';
  dinnerContentEle.style.display = 'none';
  displayIngreEle.style.display = 'none';
  messageEle.style.display = 'none';
  if (name == 'tiffin') {
    tiffinContentEle.style.display = 'block';
  } else if (name == 'lunch') {
    lunchContentEle.style.display = 'block';
  } else {
    dinnerContentEle.style.display = 'block';
  }
}

function tiffin(e) {
  clickedType = 'Tiffin';
  displayElement('tiffin');
  if (e.target === e.currentTarget) {
    class2 = e.target.className;
  }
}
function lunch(e) {
  clickedType = 'Lunch';
  displayElement('lunch');
  if (e.target === e.currentTarget) {
    class2 = e.target.className;
  }
}
function dinner(e) {
  clickedType = 'Dinner';
  displayElement('dinner');
  if (e.target === e.currentTarget) {
    class2 = e.target.className;
  }
}

tiffinEle.addEventListener('click', tiffin);
lunchEle.addEventListener('click', lunch);
dinnerEle.addEventListener('click', dinner);


tiffinContentEle.addEventListener('click', events);
lunchContentEle.addEventListener('click', events);
dinnerContentEle.addEventListener('click', events);

function events(e) {
  if (e.target !== e.currentTarget) {
    class1 = e.target.className;
    clickedTypeItem = e.target.classList[1];
  }
  displayMessage();
}

function displayIngre(arr) {
  tiffinEle.removeEventListener('click', tiffin);
  lunchEle.removeEventListener('click', lunch);
  dinnerEle.removeEventListener('click', dinner);
  tiffinEle.classList.remove('tiffin');
  lunchEle.classList.remove('lunch');
  dinnerEle.classList.remove('dinner');
  tiffinEle.classList.add('b');
  lunchEle.classList.add('b');
  dinnerEle.classList.add('b');
  displayElementNone();
  topIngreEle.style.display = 'flex';
  messageEle.style.display = 'none';
  displayIngreEle.style.display = 'block';
  displayIngreEle.innerHTML = '';
  arr.forEach((item, index) => {
    const divEle = document.createElement('div');
    divEle.className = `a a${index + 1}`;

    const inside1 = document.createElement('div');
    inside1.className = `indre${index + 1} indre`;
    inside1.textContent = item;

    const inside2 = document.createElement('div');
    inside2.className = "plus";
    inside2.textContent = '+';

    divEle.appendChild(inside1);
    divEle.appendChild(inside2);

    displayIngreEle.appendChild(divEle);
    ingreElementsArray.push(divEle);
  });
  Elements();
  submitEle.addEventListener('click', () => {
    if (selectedElementsArray.length < 5) {
      alertCustom("please add atleast 5 Items to get results!");
    } else {
      displayResults();
    }
  });
}
function Elements() {
  messageAboutContentEle.style.display = 'block';
  messageAboutContentEle.textContent = `In ${clickedType} Select Any 5 Ingredients of ${clickedTypeItem}`;
  const message3 = document.createElement('div');
  message3.className = 'message-know';
  message3.style.color = 'green';
  message3.style.fontSize = '1.2rem';
  message3.style.fontWeight = 'bold';

  const tickImage = document.createElement('img');

  tickImage.src = './image/tick-icon.png'
  tickImage.alt = 'Tick Image';
  tickImage.style.height = '30px';
  tickImage.style.width = '30px';

  ingreElementsArray.forEach((item, index) => {
    item.addEventListener('click', () => {

      const children1 = item.children[0]
      const classArray = item.classList;
      const divEle = document.createElement('div');
      divEle.className = `s s${classArray[1]}`
      const inside1 = document.createElement('div');
      inside1.textContent = children1.textContent;
      inside1.className = children1.className;
      const inside2 = document.createElement('div');
      inside2.textContent = 'x';
      inside2.className = 'cross';

      divEle.appendChild(inside1);
      divEle.appendChild(inside2);
      item.style.backgroundColor = 'green';
      item.style.color = 'white';
      setInterval(() => {
        item.style.backgroundColor = 'white';
        item.style.color = 'black';
      }, 400);
      message3.textContent = `${selectedElementsArray.length + 1} Item(s) is Added!`;

      addedItemsEle.appendChild(tickImage);
      addedItemsEle.appendChild(message3);

      listOfItemsEle.appendChild(divEle);
      selectedElementsArray.push(divEle);
      // console.log(selectedElementsArray);
    });
  });
  //selectedElementsFunction();
}
selectedItemsEle.addEventListener('click', () => {
  displayIngreEle.style.display = 'none';
  selectedList.style.display = 'flex';
  addedItemsEle.style.display = 'none';

  selectedElementsArray.forEach((items, index) => {
    items.addEventListener('click', () => {
      selectedElementsArray.pop(index);
      items.remove();
      document.querySelector('.message-know').textContent = `${selectedElementsArray.length} Item(s) is Added!`;
      // console.log(selectedElementsArray);
    });
  });

  backButtonEle.addEventListener('click', () => {
    displayIngreEle.style.display = 'block';
    selectedList.style.display = 'none';
    addedItemsEle.style.display = 'flex';
  });
});


function alertCustom(message) {
  const know = document.querySelector('.message2');
  if (know) {
    return;
  }
  const element = document.createElement('div');
  element.className = 'message2';
  element.textContent = message;
  element.style.color = 'red';
  element.style.fontSize = '1.2rem';
  element.style.fontWeight = 'bold';
  element.style.marginBottom = '10px';
  element.style.lineHeight = '20px';

  errorMessageEle.appendChild(element);

  setInterval(() => {
    element.remove();
  }, 3000);
}

function displayResults() {
  displayIngreEle2.style.display = 'none';
  messageAboutContentEle.style.display = 'none';
  document.querySelector('.video').style.display = 'block';
  document.querySelector('.video-inside').addEventListener('ended' , ()=> {
  document.querySelector('.video').style.display = 'none';
  const tickimg = document.createElement('img');
  tickimg.src = './image/tick-icon.png';
  tickimg.style.height = '100px';
  tickimg.style.width = '100px';
  tickimg.style.marginBottom = '10px';

  const message4 = document.createElement('div');
  message4.textContent = `Congratulations!`;
  message4.style.marginBottom = '10px';

  const message5 = document.createElement('div');
  message5.textContent = `You Selected correct Ingredients ${selectedElementsArray.length}/${selectedElementsArray.length}`;
  message5.style.marginBottom = '10px';

  const buttonEle = document.createElement('div');
  buttonEle.textContent = '← Back to Home';
  buttonEle.className = 'back-to-home';

  buttonEle.addEventListener('click', () => {
    location.reload();
  });


  congraMessageEle.appendChild(tickimg);
  congraMessageEle.appendChild(message4);
  congraMessageEle.appendChild(message5);
  congraMessageEle.appendChild(buttonEle);

  });

}
function displayMessage() {
  displayElementNone()
  messageEle.style.display = 'flex';
  buttonEle.addEventListener('click', () => {
    if (class2 == 'tiffin') {
      displayIngre(tiffinIngredients);
    } else if (class2 == 'lunch') {
      displayIngre(lunchIngredients)
    } else {
      displayIngre(dinnerIngredients);
    }
  });
}