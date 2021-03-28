import logo from '../../assets/logo.svg'

import { Container, Wrapper } from './styles'

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="cashflow" />

        <button type="button">New Transaction</button>
      </Wrapper>
    </Container>
  )
}
