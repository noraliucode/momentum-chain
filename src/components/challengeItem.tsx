import { IChallenge } from 'types/types'
import { styled } from '@mui/material/styles'

interface IProps {
  challengeData: IChallenge[]
}

const DAYS_INDEX_WIDTH = 50

const Root = styled('div')(() => ({
  flexDirection: 'column-reverse',
  display: 'flex',
}))

const ItemWrapper = styled('div')(() => ({
  display: 'flex',
  width: '600px',
  margin: 'auto',
  position: 'relative',
}))

const Item = styled('div')(() => ({
  width: '400px',
  height: '78px',
  border: 'solid black 1px',
  margin: 'auto',
  marginBottom: '19px',
  borderRadius: '10px',
}))

const Line = styled('div')(() => ({
  position: 'absolute',
  left: DAYS_INDEX_WIDTH / 2,
  zIndex: -1,
  borderLeft: '1px solid black',
  height: '500px',
}))

const DaysIndex = styled('div')(() => ({
  width: '50px',
  height: '50px',
  border: 'solid black 1px',
  marginBottom: '19px',
  borderRadius: '50%',
  background: 'white',
}))

const Number = styled('div')(() => ({
  fontSize: 30,
  fontWeight: 800,
}))

export const ChallengeItem: React.FC<IProps> = ({ challengeData }) => {
  return (
    <Root>
      {challengeData &&
        challengeData.map((x, index) => (
          <ItemWrapper key={`${x.timestamp}_index`}>
            <DaysIndex>
              Day
              <Number>{index + 1}</Number>
            </DaysIndex>
            <Item>
              Date: {new Date(x.timestamp.toNumber() * 1000).toDateString()},
              Link: <a href={x.link}>{x.link}</a>{' '}
            </Item>
            <Line />
          </ItemWrapper>
        ))}
    </Root>
  )
}
