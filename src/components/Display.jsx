const Display = ({ className, display }) => {
  return (
    <div
      id="display"
      className={`${className} bg-stone-900 text-white text-right p-2`}
    >
      {display}
    </div>
  )
}

Display.defaultProps = {
  className: '',
}

export default Display
