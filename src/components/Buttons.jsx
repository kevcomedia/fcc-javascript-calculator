import Button from './Button'

const Buttons = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-1">
      <Button className="col-span-2" id="clear" label="AC" type="clear" />
      <Button id="divide" label="/" type="operator" />
      <Button id="multiply" label="*" type="operator" />
      <Button id="seven" label="7" />
      <Button id="eight" label="8" />
      <Button id="nine" label="9" />
      <Button id="subtract" label="-" type="operator" />
      <Button id="four" label="4" />
      <Button id="five" label="5" />
      <Button id="six" label="6" />
      <Button id="add" label="+" type="operator" />
      <Button id="one" label="1" />
      <Button id="two" label="2" />
      <Button id="three" label="3" />
      <Button className="row-span-2" id="equals" label="=" type="equals" />
      <Button className="col-span-2" id="zero" label="0" />
      <Button id="decimal" label="." />
    </div>
  )
}

export default Buttons
