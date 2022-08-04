import logo from './logo.svg'
import './App.css'
import { useChallenge } from 'helper/useChallenge'
import { ChallengeItem } from './components/challengeItem'
import { ConnectWallet } from './components/ConnectWallet'
import { UseWalletProvider } from 'use-wallet'

function App() {
  const { challengeData } = useChallenge()

  return (
    <UseWalletProvider>
      <div className="App">
        <ConnectWallet />
        <ChallengeItem challengeData={challengeData} />
      </div>
    </UseWalletProvider>
  )
}

export default App
