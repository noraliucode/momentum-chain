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
        <h1>Nora's Smart Contract Learning Challenge</h1>
        <ConnectWallet />
        <ChallengeItem challengeData={challengeData} />
      </div>
    </UseWalletProvider>
  )
}

export default App
