import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`

export const Card = styled.div`
  background: ${props => props.theme.colors.secundary};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  strong {
    color: ${props => props.theme.colors.textHighlight};
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
  }
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
