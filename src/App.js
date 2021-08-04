import { useState } from 'react'
import IntroPage from './pages/IntroPage'
import ScanPage from './pages/ScanPage'

function App() {
	const [formIsValid, setFormIsValid] = useState(false)
	if (!formIsValid) {
		return <IntroPage validityHandler={setFormIsValid} />
	} else {
		return <ScanPage validityHandler={setFormIsValid} />
	}
}

export default App
