import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.colors.primary};
`

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: #0c83d0;
    font-size: 1rem;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.4s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 1rem;
      font-size: 2.5rem;
    }
  }
`
