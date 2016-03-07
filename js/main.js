

//introduce a variable named Sum which will add up all of the values of the properties of the objects within an array
//introduce another variable average which will be defined by take that new value Sum and divide it by the number of values in the array
//return the average
var li1, li2, li3, li4, li5, li6;

li1 = document.querySelector('.answer1');
li2 = document.querySelector('.answer2');
li3 = document.querySelector('.answer3');
li4 = document.querySelector('.answer4');
li5 = document.querySelector('.answer5');
li6 = document.querySelector('.answer6');


var prices = items.map(function(product) {
	return product.price;
});

var totalSum = prices.reduce(function (x, y) {
	return x + y;
});

var average = totalSum / prices.length;
 average.toFixed(2);

li1.textContent = "The average price is " + average.toFixed(2) + ".";
//answer1.textContent = "The average price is " + average.toFixed(2) + ".";
//console.log(li1.textContent);
//}

//second answer:  look at each value of price in the array items
//filter out items that are below 14 and above 18
//OR retain items that are above 14 but below 18
// look at the titles of those items
//return/publish the titles of those items

var productName = items.filter(function(midPriceObjects) {
	return (midPriceObjects.price > 14 && midPriceObjects.price < 18);

});

var namesOfObjects = productName.map(function(nameOfItem) {
	return nameOfItem.title;
});

li2.textContent = namesOfObjects
	

//look at all of the objects in the array. 
//filter it to find the one that has the GBP currency code
//give the title and price for that object

var britishItem = items.filter(function(allItems) {
	if (allItems.currency_code === "GBP") {
		return allItems;
	}});

var nameOfBritItem = britishItem.map(function(titleOfBritItem) {
	return titleOfBritItem.title;
});

var priceOfBritItem = britishItem.map(function(cost) {
	return cost.price;
});

li3.textContent = nameOfBritItem + " costs £" + priceOfBritItem
//look at all objects in the array
//filter to all objects with "wood" as material in the material array
//give the title of those objects

//var woodObject = items.filter(function(materialOfObject) {
//	if (materialOfObject.material.wood === "wood") {
//		return materialOfObject;
//	}});

//return woodObject.title;


//var woodObject = items.filter(function(materialOfObject) {
//	if (materialOfObject.materials === ["wood"]) {
//		return materialOfObject;
//	}});

//var nameOfWoodObject = woodObject.title;
//return nameOfWoodObject;



///which items made of 8 or more materials?  List name, quantity of items and materials





//how many items made by their sellers

var itemBySeller = items.filter(function(allItems) {
	if (allItems.who_made === "i_did") {
		return allItems;
	}});
var numOfSeller = itemBySeller.length;

li6.textContent = numOfSeller + " were made by their sellers."
//return numOfSeller  (don't need to return anything if no function)


