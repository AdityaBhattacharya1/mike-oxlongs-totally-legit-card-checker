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
				Warning!{' '}
				{detections === 1
					? `${detections} detection`
					: `${detections} detections`}{' '}
				in our database!
			</h1>
			<h4 className={classes['error-text']}>
				haha jk don't worry you are probably safe
			</h4>

			<p className={classes['success-para']}>
				This software is not meant for malicious purposes, but if you
				fell for this ensure that you are aware of what you are
				downloading on your device.
			</p>
			<a
				className={classes['info-link']}
				href="https://support.google.com/google-ads/answer/2375413?hl=en"
			>
				For more details, click here.
			</a>

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

const ScanPage = ({ validityHandler, creditCardNums, currCreditCardNum }) => {
	const [loading, setLoading] = useState(true)

	// shorthand for: filter the array, then store the array's length in the variable.
	// detection - 1 because we don't want to show error for a new entry.
	const detections =
		creditCardNums.filter((num) => num === currCreditCardNum).length - 1

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

	if (loading) {
		return <Loading />
	} else if (detections >= 1) {
		return (
			<ErrorComponent
				detections={detections}
				validityHandler={validityHandler}
			/>
		)
	} else {
		return <SuccessComponent validityHandler={validityHandler} />
	}
}

export default ScanPage
