// question: https://takeuforward.org/data-structure/count-digits-in-a-number/

let count_digits_1 = (num) => {
	let count = 0;
	while (num > 0) {
		if (num % 10 >= 0) {
			count++;
		}
		num = Math.floor(num / 10);
	}
	console.log(count);
};

let count_digits_2 = (num) => {
	console.log(Math.floor(Math.log10(num)) + 1);
};

(() => {
	const func_list = [count_digits_1, count_digits_2];
	const args = [12345, 99999999, 1000000, 222];

	for (let i = 0; i < func_list.length; i++) {
		for (let j = 0; j < args.length; j++) {
			const _func = func_list[i];
			console.log(
				`\n\n\n>>>>>> RUNNING ${_func.name} with argument ${args[j]} >>>>>> \n`
			);
			_func(args[j]);
		}
	}
})();
