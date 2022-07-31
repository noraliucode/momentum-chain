import { IChallenge } from 'types/types'

interface IProps {
  challengeData: IChallenge[]
}

export const PoolTableItem: React.FC<IProps> = ({ challengeData }) => {
  return (
    <div>
      {challengeData &&
        challengeData.map((x, index) => (
          <div key={`${x.timestamp}_index`}>
            Date: {new Date(x.timestamp.toNumber() * 1000).toDateString()},
            Link: {x.link}{' '}
          </div>
        ))}
    </div>
  )
}
