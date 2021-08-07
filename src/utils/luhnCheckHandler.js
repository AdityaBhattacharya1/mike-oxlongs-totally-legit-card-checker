/**
 *
 * @param {Number} num
 * @returns Boolean
 */
export const luhnCheckHandler = (num) => {
	let strNum = '' + num
	// returning false because else 1123 would have been a valid credit card number (it is not.)
	if (strNum.trim().length < 15) {
		return false
	}
	let arr = strNum
		.split('')
		.reverse()
		.map((x) => parseInt(x))
	let lastDigit = arr.splice(0, 1)[0]
	/*
		The following code might seem intimidating. Here is the non-ternary version:
		if (i % 2 !== 0) {
			acc + val
		} else {
			if (acc + ((val = val * 2) > 9) {
				val - 9
			} else {
				val)
			}
		}
	*/
	let sum = arr.reduce(
		(acc, val, i) =>
			i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
		0
	)
	sum += lastDigit
	return sum % 10 === 0
}
