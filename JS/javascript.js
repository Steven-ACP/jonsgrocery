/** @format */

var banana = 0.79;
var apple = 1.25;
var bread = 2.99;
var milk = 3.49;
var eggs = 4.25;
var milkDiscount = disCountItem(milk, 0.1);
var cartTotal = 0;

function addToCart(item) {
  cartTotal = item + cartTotal;
  // return cartTotal;
}

function removeFromCartTotal(item) {
  cartTotal = cartTotal - item;
}

function disCountItem(item, discount) {
  return item - item * discount;
}

function calcTotal() {
  console.log(cartTotal.toFixed(2));
}

addToCart(banana);

addToCart(banana);

addToCart(banana);

addToCart(banana);

addToCart(banana);

addToCart(apple);

addToCart(apple);

addToCart(bread);

addToCart(eggs);

removeFromCartTotal(banana);

removeFromCartTotal(banana);

addToCart(milkDiscount);
calcTotal();
