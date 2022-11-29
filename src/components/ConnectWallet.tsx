import { useWallet } from 'use-wallet'

export const ConnectWallet = () => {
  const wallet = useWallet()
  return (
    <>
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button
            onClick={() => {
              console.log('connect!!!')

              wallet.connect()
            }}
          >
            MetaMask
          </button>
          <button onClick={() => wallet.connect('frame')}>Frame</button>
          <button onClick={() => wallet.connect('portis')}>Portis</button>
        </div>
      )}
    </>
  )
}
