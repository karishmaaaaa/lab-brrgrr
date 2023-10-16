// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese){
    cheese.style.display="inherit";
  }else {
    cheese.style.display="none";
  }

}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes){
    tomato.style.display="inherit";
  }else {
    tomato.style.display="none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if (state.Onions){
    onion.style.display="inherit";
  }else {
    onion.style.display="none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce){
    lettuce.style.display="inherit";
  }else {
    lettuce.style.display="none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
}



// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  let patty = document.querySelector(".btn-patty");
  if (state.Patty){
    patty.classList.add("active")
  } else {
    patty.classList.remove("active")
  }
  let cheese = document.querySelector(".btn-cheese");
  if (state.Cheese){
    cheese.classList.add("active")
  } else {
    cheese.classList.remove("active")
  }

  let tomatoes = document.querySelector(".btn-tomatoes");
  if (state.Tomatoes){
    tomatoes.classList.add("active")
  } else {
    tomatoes.classList.remove("active")
  }

  let onions = document.querySelector(".btn-onions");
  if (state.Onions){
    onions.classList.add("active")
  } else {
    onions.classList.remove("active")
  }

  let lettuce = document.querySelector(".btn-lettuce");
  if (state.Lettuce){
    lettuce.classList.add("active")
  } else {
    lettuce.classList.remove("active")
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
let items = document.getElementsByClassName("items")
function renderIngredientsBoard(){
  if (state.Patty){
    items[0].textContent = "Patty"
  }else{
    items[0].textContent = ""
  }
  if (state.Cheese){
    items[1].textContent = "Cheese"
  }else{
    items[1].textContent = ""
  }
  if (state.Tomatoes){
    items[2].textContent = "Tomatoes"
  }else{
    items[2].textContent = ""
  }
  if (state.Onions){
    items[3].textContent = "Onions"
  }else{
    items[3].textContent = ""
  }
  if (state.Lettuce){
    items[4].textContent = "Lettuce"
  }else{
    items[4].textContent = ""
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
let price = document.getElementsByClassName("price-details")[0]
var total=0
function renderPrice(){
  total = 0
  if (state.Patty){
    total+=80
  }
  if (state.Cheese){
    total+=18
  }
  if (state.Tomatoes){
    total+=18
  }
  if (state.Onions){
    total+=17
  }
  if (state.Lettuce){
    total+=17
  }
  price.textContent=`INR ${total+20}`
}

