import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  return (
    // temporary padding so the test menu doesn't block the calculator
    <div className="p-16 w-96">
      <Display className="mb-2" />
      <Buttons />
    </div>
  )
}

export default App
