const Display = ({ className }) => {
  return (
    <div
      id="display"
      className={`${className} bg-stone-900 text-white text-right p-2`}
    >
      0
    </div>
  )
}

Display.defaultProps = {
  className: '',
}

export default Display
