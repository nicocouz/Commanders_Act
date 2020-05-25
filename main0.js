

// Random price_TF
const price_TF = function() {
  let a = Math.random() * 100;
  return a.toString().substring(0,5)
}

// Random price_WT
const price_WT = function() {
  let a = Math.random() * 100;
  return a.toString().substring(0,5)
}

// Random note
const note = function() {
  return Math.floor(Math.random() * 10) + 1;
}

// Randon id
const id = function() {
  return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}


// All products

const products = [
  {name: "plate", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "fork", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "puzzle", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "blanket", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "table", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "umbrella", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "cheese", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "glass", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "knife", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()},
  {name: "gun", price_TF: price_TF(), price_WT: price_WT(), id: id(), note: note()}
]


//
const tooExpensive = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].price_TF >= 40) {
    tooExpensive.push(products[i].name + " : " + products[i].price_TF)
  }
}

//const tooExpensive = products.filter(product => product.price_TF >= 30)

// console.table(tooExpensive)

// products.forEach(function(product) {
//   console.log(product.name);
// });

var obj = tC.containersLaunched
var map = new Map(Object.entries(obj));
console.log(map)


for (var i = 0; i < Object.keys(obj).length; i++) {
  console.log("Site ID : "+Object.keys(obj)[i])
}
var container = Object.values(obj)
console.log(container.entries(container))
