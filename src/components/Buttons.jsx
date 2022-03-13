import Button from './Button'
import DigitButton from './DigitButton'

const Buttons = ({ dispatch }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-1">
      <Button
        className="col-span-2"
        id="clear"
        label="AC"
        type="clear"
        onClick={() => dispatch({ type: 'clear' })}
      />
      <Button
        id="divide"
        label="/"
        type="operator"
        onClick={() => dispatch({ type: '/' })}
      />
      <Button
        id="multiply"
        label="*"
        type="operator"
        onClick={() => dispatch({ type: '*' })}
      />
      <DigitButton id="seven" digit="7" dispatch={dispatch} />
      <DigitButton id="eight" digit="8" dispatch={dispatch} />
      <DigitButton id="nine" digit="9" dispatch={dispatch} />
      <Button
        id="subtract"
        label="-"
        type="operator"
        onClick={() => dispatch({ type: '-' })}
      />
      <DigitButton id="four" digit="4" dispatch={dispatch} />
      <DigitButton id="five" digit="5" dispatch={dispatch} />
      <DigitButton id="six" digit="6" dispatch={dispatch} />
      <Button
        id="add"
        label="+"
        type="operator"
        onClick={() => dispatch({ type: '+' })}
      />
      <DigitButton id="one" digit="1" dispatch={dispatch} />
      <DigitButton id="two" digit="2" dispatch={dispatch} />
      <DigitButton id="three" digit="3" dispatch={dispatch} />
      <Button className="row-span-2" id="equals" label="=" type="equals" />
      <DigitButton
        className="col-span-2"
        id="zero"
        digit="0"
        dispatch={dispatch}
      />
      <Button
        id="decimal"
        label="."
        onClick={() => dispatch({ type: 'decimal' })}
      />
    </div>
  )
}

export default Buttons
