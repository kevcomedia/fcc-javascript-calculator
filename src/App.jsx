import { useReducer } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import calculatorService from './services/calculatorService'

const reducer = (state, action) => {
  switch (action.type) {
    case 'clear':
      return '0'
    case 'digit':
      if (state === '0') {
        return action.digit
      } else {
        return state + action.digit
      }
    case 'decimal':
      if (/\.\d*$/.test(state)) {
        // Prevent more than one decimal point per number
        return state
      } else if (/[-+*/]$/.test(state)) {
        return state + '0.'
      } else {
        return state + '.'
      }
    case '+':
    case '*':
    case '/':
      return state.replace(/^(.*(\d|\.))([-+*/]-?)?$/, '$1' + action.type)
    case '-':
      if (/[-+*/]-$/.test(state)) {
        return state
      } else {
        return state + '-'
      }
    case 'equals':
      // Show only at most 10 decimal places, but trim any trailing zeroes.
      return `${+calculatorService.evaluateExpression(state).toPrecision(10)}`
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, '0')

  return (
    // temporary margin so the test menu doesn't block the calculator
    <div className="m-16 p-4 w-80 bg-zinc-700">
      <Display className="mb-2" display={state} />
      <Buttons dispatch={dispatch} />
    </div>
  )
}

export default App
