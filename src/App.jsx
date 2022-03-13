import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  return (
    // temporary margin so the test menu doesn't block the calculator
    <div className="m-16 p-4 w-80 bg-zinc-700">
      <Display className="mb-2" />
      <Buttons />
    </div>
  )
}

export default App
