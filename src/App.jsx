import { useReducer } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import calculatorService from './services/calculatorService'

const reducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      return { display: '0' }
    case 'digit':
      if (state.isFreshEval || state.display === '0') {
        return { display: action.digit }
      } else {
        return { display: state.display + action.digit }
      }
    case 'decimal':
      if (state.isFreshEval) {
        return { display: '0.' }
      } else if (/\.\d*$/.test(state.display)) {
        // Prevent more than one decimal point per number
        return state
      } else if (/[-+*/]$/.test(state.display)) {
        return { display: state.display + '0.' }
      } else {
        return { display: state.display + '.' }
      }
    case '+':
    case '*':
    case '/':
      return {
        display: state.display.replace(
          /^(.*(\d|\.))([-+*/]-?)?$/,
          '$1' + action.type
        ),
      }
    case '-':
      if (/[-+*/]-$/.test(state.display)) {
        return state
      } else {
        return { display: state.display + '-' }
      }
    case 'equals':
      // Show only at most 10 decimal places, but trim any trailing zeroes.
      return {
        display: `${+calculatorService
          .evaluateExpression(state.display)
          .toPrecision(10)}`,
        isFreshEval: true,
      }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    display: '0',
  })

  return (
    // temporary margin so the test menu doesn't block the calculator
    <div className="m-16 p-4 w-80 bg-zinc-700">
      <Display className="mb-2" display={state.display} />
      <Buttons dispatch={dispatch} />
    </div>
  )
}

export default App
