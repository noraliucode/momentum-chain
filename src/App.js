import logo from './logo.svg'
import './App.css'
import { useChallenge } from 'helper/useChallenge'
import { PoolTableItem } from './components/challengeItem'

function App() {
  const { challengeData } = useChallenge()

  return (
    <div className="App">
      <PoolTableItem challengeData={challengeData} />
    </div>
  )
}

export default App
