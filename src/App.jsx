import Button from './components/Button'

const App = () => {
  return (
    // temporary padding so the test menu doesn't block the calculator
    <div className="p-16 w-96">
      <div className="grid grid-cols-4 grid-rows-5 gap-1">
        <Button
          className="col-start-1 row-start-2 aspect-square"
          id="seven"
          label="7"
        />
        <Button className="col-start-2 row-start-2" id="eight" label="8" />
        <Button className="col-start-3 row-start-2" id="nine" label="9" />
        <Button className="col-start-1 row-start-3" id="four" label="4" />
        <Button className="col-start-2 row-start-3" id="five" label="5" />
        <Button className="col-start-3 row-start-3" id="six" label="6" />
        <Button className="col-start-1 row-start-4" id="one" label="1" />
        <Button className="col-start-2 row-start-4" id="two" label="2" />
        <Button className="col-start-3 row-start-4" id="three" label="3" />
        <Button
          className="col-start-1 row-start-5 col-span-2"
          id="zero"
          label="0"
        />
        <Button
          className="col-start-4 row-start-4 row-span-2"
          id="equals"
          label="="
          type="equals"
        />
      </div>
    </div>
  )
}

export default App
