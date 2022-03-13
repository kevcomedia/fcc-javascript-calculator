import Button from './components/Button'

const App = () => {
  return (
    // temporary padding so the test menu doesn't block the calculator
    <div className="p-16">
      <Button
        className="bg-sky-600 hover:bg-sky-700 text-white"
        id="equals"
        label="="
      />
    </div>
  )
}

export default App
