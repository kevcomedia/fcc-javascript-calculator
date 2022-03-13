import Button from './Button'

const DigitButton = ({ id, className, digit, dispatch }) => {
  return (
    <Button
      id={id}
      label={digit}
      className={className}
      onClick={() => dispatch({ type: 'digit', digit })}
    />
  )
}

export default DigitButton
