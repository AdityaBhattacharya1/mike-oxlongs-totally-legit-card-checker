import React from 'react'
import classes from './Intro.module.css'

const Intro = () => {
	return (
		<div>
			<h1 className={classes.header}>
				Is your credit card in a hacker's database?
			</h1>
			<p>
				You can easily find out now! All you need to do is enter its
				information here and we will scan thousands of hacker databases
				to see if any they have match yours
			</p>
		</div>
	)
}

export default Intro
