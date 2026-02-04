/** @format */

var banana = 0.79;
var apple = 1.25;
var bread = 2.99;
var milk = 3.49;
var eggs = 4.25;

var cartTotal = 0;

function addToCart(item) {
  cartTotal = item + cartTotal;
  // return cartTotal;
}

function removeFromCartTotal(item) {
  cartTotal = item - cartTotal;
}

addToCart(apple);
addToCart(milk);
console.log(cartTotal);
removeFromCartTotal(apple);
console.log(cartTotal);
