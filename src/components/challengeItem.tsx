import { IChallenge } from 'types/types'

interface IProps {
  challengeData: IChallenge[]
}

export const PoolTableItem: React.FC<IProps> = ({ challengeData }) => {
  return (
    <div>
      {challengeData.map((x) => (
        <div>
          Date: {new Date(x.timestamp.toNumber() * 1000).toDateString()}, Link:{' '}
          {x.link}{' '}
        </div>
      ))}
    </div>
  )
}
