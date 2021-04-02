import { useEffect } from 'react'

import logo from '../../assets/logo.svg'
import { useModal } from '../../hooks/modal'
import NewTrasaction from '../NewTrasaction'

import { Container, Wrapper } from './styles'

export default function Header() {
  const { open, setChild } = useModal()

  useEffect(() => {
    setChild(<NewTrasaction />)
  }, [setChild])

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="cashflow" />

        <button type="button" onClick={open}>
          New Transaction
        </button>
      </Wrapper>
    </Container>
  )
}
