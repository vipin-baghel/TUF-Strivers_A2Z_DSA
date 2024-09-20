/**
 * Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Link: https://takeuforward.org/data-structure/stock-buy-and-sell/
 */

const max_profit = (prices) => {
	let len = prices.length,
		maxProfit = 0,
		minPrice = prices[0];

	for (let i = 0; i < len; i++) {
		let cost = prices[i] - minPrice;
		maxProfit = Math.max(cost, maxProfit);
		minPrice = Math.min(prices[i], minPrice);
	}

	return maxProfit;
};

console.log(max_profit([7, 1, 5, 3, 6, 4]));
console.log(max_profit([7, 6, 4, 3, 1]));
