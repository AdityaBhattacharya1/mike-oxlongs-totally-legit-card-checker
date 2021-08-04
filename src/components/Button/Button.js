import React from 'react'
import './Button.module.css'

const Button = ({ disabled, className, text, type, onClick }) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={className}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default Button
