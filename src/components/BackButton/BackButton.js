import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function BackButton() {
  const { goBack } = useHistory()
  return (
    <Button onClick={() => goBack()}>
      <SVG
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
      >
        <path d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z"></path>
      </SVG>
    </Button>
  )
}

const SVG = styled.svg`
  fill: var(--white);
`
const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1rem;
  border: none;
  cursor: pointer;
`
