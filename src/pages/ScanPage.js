import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import classes from './ScanPage.module.css'
import { ReactComponent as SuccessSvg } from '../assets/successThumbsUp.svg'
import { ReactComponent as ErrorSvg } from '../assets/errorIceCream.svg'
import Button from '../components/Button/Button'

const Loading = () => {
	return (
		<>
			<div className={classes.spinner}>
				<LoadingSpinner />
			</div>
			<p className={classes['loading-text']}>
				Scanning the Database for possible matches...
			</p>
		</>
	)
}

const SuccessComponent = ({ validityHandler }) => {
	return (
		<>
			<SuccessSvg />
			<h1 className={classes['success-text']}>
				Congratulations! No matches were found.
			</h1>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Button
					type="button"
					onClick={() => validityHandler((prev) => !prev)}
					text="Try another card"
					className={classes['retry-btn']}
				/>
			</div>
		</>
	)
}

function ErrorComponent({ detections, validityHandler }) {
	return (
		<>
			<ErrorSvg />
			<h1 className={classes['error-text']}>
				Warning! Credentials have been detected in our database!
			</h1>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Button
					type="button"
					onClick={() =>
						(window.location.href =
							'https://i.imgur.com/FKmX7dt.gif')
					}
					text="For help, click this totally not shady link!"
					className={classes['retry-btn']}
				/>
				<Button
					type="button"
					onClick={() => validityHandler((prev) => !prev)}
					text="Try another card"
					className={classes['retry-btn']}
				/>
			</div>
		</>
	)
}

const ScanPage = ({ validityHandler, creditCardNums, currCreditCardNum }) => {
	const [loading, setLoading] = useState(true)

	// shorthand for: filter the array, then store the array's length in the variable.
	// detection - 1 because we don't want to show error for a new entry.
	// Also: here assuming that every credit card is unique to the user (which for the majority holds true.)
	const credentialsDetected =
		creditCardNums.filter((num) => num === currCreditCardNum).length > 1

	// Totally legit top secret process
	const LOADING_TIMEOUT =
		Math.floor(Math.random() * 100_000) < 10_000
			? Math.floor(Math.random() * 100_000)
			: 20_000
	useEffect(() => {
		const loadingTimer = setTimeout(() => {
			setLoading(false)
		}, LOADING_TIMEOUT)
		return () => clearTimeout(loadingTimer)
	})

	return (
		<>
			{loading && <Loading />}
			{!loading && credentialsDetected && (
				<ErrorComponent
					detections={credentialsDetected}
					validityHandler={validityHandler}
				/>
			)}
			{!loading && !credentialsDetected && (
				<SuccessComponent validityHandler={validityHandler} />
			)}
		</>
	)
}

export default ScanPage
