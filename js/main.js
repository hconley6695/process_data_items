

//introduce a variable named Sum which will add up all of the values of the properties of the objects within an array
//introduce another variable average which will be defined by take that new value Sum and divide it by the number of values in the array
//return the average


var prices = items.map(function(product) {
	return product.price;
});

var totalSum = prices.reduce(function (x, y) {
	return x + y;
});

var average = totalSum/prices.length;
 average.toFixed(2);


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

	



//var midPriceAmounts = prices.filter(function(amount) {
//	if (amount < 18 && amount > 14) {
//		return amount};
//	});







	//var tooMuch = amount >= 18.00;
	//var tooLittle = amount <= 14.00;
	//return midPriceAmounts =
}


	)

