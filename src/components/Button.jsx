const Button = ({ id, className, label, type }) => {
  const typeClasses = {
    digit: 'bg-stone-500 hover:bg-stone-600',
    operator: 'bg-stone-400 hover:bg-zinc-500',
    equals: 'bg-sky-600 hover:bg-sky-700',
  }

  return (
    <button
      className={`${className} ${typeClasses[type]} text-white p-4 flex justify-center items-center`}
      id={id}
      type="button"
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  type: 'digit',
}

export default Button
