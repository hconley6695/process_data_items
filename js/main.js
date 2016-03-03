function averagePrice(products) {
	var productSum = products.reduce(function(totalSum, currentPrice) {
		return totalSum + currentPrice.price;
	}, 0);
	var average = productSum / products.length;
	return average;
}