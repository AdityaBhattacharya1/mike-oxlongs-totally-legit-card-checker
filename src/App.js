import { useState } from 'react'
import IntroPage from './pages/IntroPage'

function App() {
	const [formIsValid, setFormIsValid] = useState(false)
	if (!formIsValid) {
		return <IntroPage validityHandler={setFormIsValid} />
	} else {
		return <h1>Placeholder!</h1>
	}
}

export default App
