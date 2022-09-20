import{ useState }from 'react'
import './style.scss'

export const Counter = () => {
	const [counter, setCounter] = useState(0)

	return (
		<section class="counter-container">
			<h2>Contador de pessoas</h2>
			<div className="res">
				<p>{counter}</p>
				<button onClick={()=> setCounter(counter + 1)}> + </button>
				<button onClick={()=> setCounter(counter ? counter - 1 : counter)}> - </button>

			</div>
		</section>
	)
}