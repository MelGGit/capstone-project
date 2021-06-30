import { ReactComponent as Wave } from '../../assets/wave.svg'
import styled from 'styled-components/macro'

export default function WaveBackground() {
  return (
    <Container>
      <Wave />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  z-index: -10;
`
