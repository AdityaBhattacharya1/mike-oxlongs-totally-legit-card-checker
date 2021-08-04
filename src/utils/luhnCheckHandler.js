/**
 *
 * @param {Number} num
 * @returns Boolean
 */
export const luhnCheckHandler = (num) => {
	let strNum = '' + num
	if (strNum.trim().length < 15) {
		return false
	}
	let arr = strNum
		.split('')
		.reverse()
		.map((x) => parseInt(x))
	let lastDigit = arr.splice(0, 1)[0]
	let sum = arr.reduce(
		(acc, val, i) =>
			i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
		0
	)
	sum += lastDigit
	return sum % 10 === 0
}
