import { useState } from 'react'
import IntroPage from './pages/IntroPage'
import ScanPage from './pages/ScanPage'

function App() {
	const [formIsValid, setFormIsValid] = useState(false)
	const [creditCardNums, setCreditCardNums] = useState([])
	const [currCreditCardNum, setCurrCreditCardNum] = useState('')
	if (!formIsValid) {
		console.log(creditCardNums)
		return (
			<IntroPage
				validityHandler={setFormIsValid}
				creditCardNumsHandler={setCreditCardNums}
				currCreditCardNumHandler={setCurrCreditCardNum}
			/>
		)
	} else {
		return (
			<ScanPage
				validityHandler={setFormIsValid}
				creditCardNums={creditCardNums}
				currCreditCardNum={currCreditCardNum}
			/>
		)
	}
}

export default App
