import React from 'react'
import FormGroup from '../components/FormGroup/FormGroup'
import IntroText from '../components/IntroText/IntroText'
import classes from './IntroPage.module.css'

const IntroPage = ({ validityHandler }) => {
	return (
		<div className={classes['split-container']}>
			{/* <img
				src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
				alt=""
				className={classes.img}
			/> */}
			<div className={classes.img} />

			<div className={classes.content}>
				<IntroText />
				<FormGroup validityHandler={validityHandler} />
			</div>
		</div>
	)
}

export default IntroPage
