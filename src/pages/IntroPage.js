import React from 'react'
import FormGroup from '../components/FormGroup/FormGroup'
import IntroText from '../components/IntroText/IntroText'
import classes from './IntroPage.module.css'

const IntroPage = ({ validityHandler }) => {
	return (
		<div className={classes['split-container']}>
			<div className={classes.img} />

			<div className={classes.content}>
				<IntroText />
				<FormGroup validityHandler={validityHandler} />
			</div>
		</div>
	)
}

export default IntroPage
