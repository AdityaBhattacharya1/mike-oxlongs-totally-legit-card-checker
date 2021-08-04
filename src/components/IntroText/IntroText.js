import React from 'react'
import classes from './IntroText.module.css'

const IntroText = () => {
	return (
		<>
			<h1 className={classes.header}>
				Is your credit card in a hacker's database?
			</h1>
			<p className={classes.content}>
				You can easily find out now! All you need to do is enter its
				information here and we will scan thousands of hacker databases
				to see if any they have match yours
			</p>
		</>
	)
}

export default IntroText
