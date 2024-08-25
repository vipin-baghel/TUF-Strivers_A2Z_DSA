// questions: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

const pattern_1 = (count) => {
	let res;
	for (let i = 1; i < count + 1; i++) {
		res = "";
		for (let j = 1; j < count + 1; j++) {
			res += "*";
		}
		console.log(res, "\n");
	}
};

const pattern_2 = (count) => {
	let res;
	for (let i = 1; i < count + 1; i++) {
		res = "";
		for (let j = 1; j < i + 1; j++) {
			res += "*";
		}
		console.log(res, "\n");
	}
};

const pattern_3 = (count) => {
	let res;
	for (let i = 1; i < count + 1; i++) {
		res = "";
		for (let j = 1; j < i + 1; j++) {
			res += `${j}`;
		}
		console.log(res, "\n");
	}
};

const pattern_4 = (count) => {
	let res;
	for (let i = 1; i < count + 1; i++) {
		res = "";
		for (let j = 1; j < i + 1; j++) {
			res += `${i}`;
		}
		console.log(res, "\n");
	}
};

const pattern_5 = (count) => {
	let res;
	for (let i = count; i > 0; i--) {
		res = "";
		for (let j = i; j > 0; j--) {
			res += "*";
		}
		console.log(res, "\n");
	}
};

const pattern_6 = (count) => {
	let res;
	for (let i = count; i > 0; i--) {
		res = "";
		for (let j = i; j > 0; j--) {
			res += `${i - j + 1}`;
		}
		console.log(res, "\n");
	}
};

const pattern_7 = (count) => {
	let res;
	let col = count * 2 - 1;
	let mid = Math.floor(col / 2);
	for (let i = 0; i < count; i++) {
		res = "";
		start = mid - i;
		end = mid + i;
		for (let j = 0; j < col; j++) {
			if (j >= start && j <= end) {
				res += `*`;
			} else {
				res += `${j}`;
			}
		}
		console.log(res, "\n");
	}
};

const pattern_8 = (count) => {
	let res;
	let col = count * 2 - 1;
	for (let i = 0; i < count; i++) {
		res = "";
		let start = i;
		let end = col - i - 1;
		for (let j = 0; j < col; j++) {
			if (j >= start && j <= end) {
				res += "*";
			} else {
				res += " ";
			}
		}
		console.log(res, "\n");
	}
};

(() => {
	const func_list = [
		pattern_1,
		pattern_2,
		pattern_3,
		pattern_4,
		pattern_5,
		pattern_6,
		pattern_7,
		pattern_8,
	];
	const default_count = 5;
	const count_list = [3, 5, 5, 6, 5, 8, 4, 5];

	for (let i = 0; i < func_list.length; i++) {
		console.log(
			`\n\n\n>>>>>> RUNNING ${func_list[i].name} with argument ${
				count_list[i] ?? default_count
			} >>>>>> \n`
		);
		func_list[i](count_list[i] ?? default_count);
	}
})();
