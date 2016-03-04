

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


