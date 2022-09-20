import { useState } from 'react';
import './style.scss';

export const Multiplier = () => {
  const [valueOne, setValueOne] = useState(null);
  const [valueTwo, setValueTwo] = useState(null);
  const [result, setResult] = useState(null);

  const Calc = (n1, n2) => {
    setResult(n1 * n2);
	};
	
  return (
    <section class="multiplier-container">
			<h2>Multiplicador</h2>
			<div className='inputs'>
				<input type="number" placeholder='Valor um' onChange={(e) => setValueOne(e.target.value)} />
				<input type="number" placeholder='Valor dois' onChange={(e) => setValueTwo(e.target.value)} />
				<button
					className="calcular"
					onClick={() => {
						Calc(valueOne, valueTwo);
					}}
				>
					Calcular
				</button>
			</div>
			<p>Resultado : {result}</p>
    </section>
  );
};