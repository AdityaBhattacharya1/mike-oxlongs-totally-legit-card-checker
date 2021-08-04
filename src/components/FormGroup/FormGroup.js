import React from 'react'
import useInput from '../../hooks/useInput'
import { luhnCheckHandler } from '../../utils/luhnCheckHandler'
import Button from '../Button/Button'
import classes from './FormGroup.module.css'

// matches for dd/yy format
const dateRegex = /^(0[1-9]|1[012])[ /]\d\d$/i

const FormGroup = ({ validityHandler }) => {
	const {
		value: creditCardValue,
		isValid: creditCardIsValid,
		inputBlurHandler: creditCardBlurHandler,
		hasError: creditCardHasError,
		reset: resetCreditCard,
		valueChangeHandler: creditCardNumChangeHandler,
	} = useInput((val) => luhnCheckHandler(val.trim()))

	const {
		value: expValue,
		hasError: expHasError,
		inputBlurHandler: expBlurHandler,
		isValid: expIsValid,
		reset: resetExp,
		valueChangeHandler: expDateChangeHandler,
	} = useInput((val) => val.match(dateRegex))

	let formIsValid = false

	if (creditCardIsValid && expIsValid) {
		formIsValid = true
	}

	const submitHandler = (event) => {
		event.preventDefault()

		if (!formIsValid) {
			return validityHandler(formIsValid)
		}

		console.log(creditCardValue, expValue)
		resetCreditCard()
		resetExp()
		validityHandler(formIsValid)
	}

	const creditCardClasses = creditCardHasError ? classes.invalid : null
	const expClasses = expHasError ? classes.invalid : null

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="credit-card-num">Credit Card Number:</label>
			<input
				id="credit-card-num"
				type="text"
				value={creditCardValue}
				onChange={creditCardNumChangeHandler}
				onBlur={creditCardBlurHandler}
				className={creditCardClasses}
				placeholder="XXXXXXXXXXXXXXXX"
			/>
			{creditCardHasError && (
				<p className={classes['error-text']}>
					Enter a valid credit card number so that we can store-ahem
					scan the card details.
				</p>
			)}
			<label htmlFor="exp-date">Expiration date</label>
			<input
				id="exp-date"
				type="text"
				value={expValue}
				onChange={expDateChangeHandler}
				onBlur={expBlurHandler}
				className={expClasses}
				placeholder="MM/YY"
			/>
			{expHasError && (
				<p className={classes['error-text']}>
					Enter a card expiry date so that we can store-ahem scan the
					card details.
				</p>
			)}
			<Button
				disabled={!formIsValid}
				text="Scan Database"
				type="submit"
			/>
		</form>
	)
}

export default FormGroup
