import { useReducer } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import calculatorReducer from './reducers/calculatorReducer'

const App = () => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    display: '0',
  })

  return (
    // temporary margin so the test menu doesn't block the calculator
    <div className="m-16 p-4 w-80 bg-zinc-700 drop-shadow-xl">
      <Display className="mb-2" display={state.display} />
      <Buttons dispatch={dispatch} />
    </div>
  )
}

export default App
