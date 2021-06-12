import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as Back } from '../../assets/arrow-left1.svg'

export default function BackButton() {
  const { goBack } = useHistory()
  return (
    <Button onClick={() => goBack()}>
      <SVG title={'go back'} />
    </Button>
  )
}

const SVG = styled(Back)`
  fill: var(--white);
  width: 1rem;
`
const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1rem;
  border: none;
  cursor: pointer;
`
