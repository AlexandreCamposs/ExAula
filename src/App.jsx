import './App.scss';
import { Counter } from './views/Counter';
import { Multiplier } from './views/Multiplier';
import { Profile } from './views/Profile';
import './App.scss'

function App() {
  return (
    <>
      <Profile />
      <Counter />
      <Multiplier />
    </>
  );
}

export default App;
