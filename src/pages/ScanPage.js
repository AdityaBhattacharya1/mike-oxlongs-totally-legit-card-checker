import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import classes from './ScanPage.module.css'
import { ReactComponent as SuccessSvg } from '../assets/successThumbsUp.svg'
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

const ScanPage = ({ validityHandler }) => {
	const [loading, setLoading] = useState(true)
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
			{loading ? (
				<Loading />
			) : (
				<SuccessComponent validityHandler={validityHandler} />
			)}
		</>
	)
}

export default ScanPage
