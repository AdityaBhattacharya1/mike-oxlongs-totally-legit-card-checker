import { useState } from 'react'
import FormGroup from './components/FormGroup/FormGroup'
import Intro from './components/Intro/Intro'

function App() {
	const [formIsValid, setFormIsValid] = useState(false)
	if (!formIsValid) {
		return (
			<>
				<Intro />
				<FormGroup validityHandler={setFormIsValid} />
			</>
		)
	} else {
		return <h1>Placeholder!</h1>
	}
}

export default App
