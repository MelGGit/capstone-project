import styled from 'styled-components/macro'
import BounceLoader from 'react-spinners/BounceLoader'

export default function LoadingScreen() {
  return (
    <Wrapper>
      <BounceLoader color={'var(--darker-grey)'} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
