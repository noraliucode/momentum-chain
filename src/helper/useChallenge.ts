import { MOMENTUM_CHAIN_CONTRACT_ADDRESS } from '../constants'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { IChallenge } from 'types/types'
import momentumChainAbi from '../abis/momentumChain.json'

interface IState {
  loading: boolean
  challengeData: IChallenge[] | undefined
}

export const useChallenge = () => {
  const [state, setState] = useState<IState>({
    loading: true,
    challengeData: undefined,
  })

  const loadInfo = async () => {
    try {
      const provider = await ethers.getDefaultProvider('goerli')
      const momentumChainContract = new ethers.Contract(
        MOMENTUM_CHAIN_CONTRACT_ADDRESS,
        momentumChainAbi,
        provider
      )
      const recordIndex = await momentumChainContract.recordIndex()
      const indexArray = Array.from(Array(recordIndex).keys())
      const challengeData: IChallenge[] = await Promise.all(
        indexArray.map((x) => momentumChainContract.records(x))
      )

      setState({
        loading: false,
        challengeData,
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    loadInfo()
  }, [])

  return { ...state, loadInfo }
}
