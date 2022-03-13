const Button = ({ id, className, label }) => {
  return (
    <button
      className={`${className} p-6 flex justify-center items-center aspect-square`}
      id={id}
      type="button"
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}

export default Button
