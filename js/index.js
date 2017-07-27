// arrays to store info added into form
// could also use a multi-dimensional array
var prodNames = [];
var qTyp = [];
var prodPrice = [];

// this function is adding the items fromt the cart 
function addItem() {
  prodNames.push(document.getElementById('pName').value);
  qTyp.push(document.getElementById('pQty').value);
  prodPrice.push(document.getElementById('price').value);
  
  displayCart();
}

function displayCart(){
  // string variable used to create a table heading for the shopping cart once items have been added
  var cartData = "<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>"
  
  // total variable used to add the item prices together
  var total = 0;
  
  for (var i=0; i< prodNames.length; i++) {
    total += qTyp[i] * prodPrice[i];
    cartData += "<tr><td>" + prodNames[i] + "</td><td>" + qTyp[i] + "</td><td>" + prodPrice[i] + '</td><td><button onclick="delElement(' + i + ')">Delete</button></td></tr>';
  }
  
  // this addition to the cartData variable adds the mostly empty line at the end of the cart which also holds the line item for the total
  cartData += "<tr><td></td><td></td><td></td><td>" + total + "</td><tr></table>";
  
  // this is sending all of the lines above from the function and the addtion to the variable to the div in the html with the id = "cart"
  document.getElementById("cart").innerHTML = cartData;
}

// this method allows us to use the delete button to delete an item from the shopping cart
// here the parameter a  is used to signify the index that needs to be removed from the array -- if you pay attention to the displayCart method above you'll notice that the variable passed in is i (this is based of of the index referenced in the for loop)
function delElement(a) {
  prodNames.splice(a, 1);
  qTyp.splice(a, 1);
  prodPrice.splice(a, 1);
  diplayCart();
  
}