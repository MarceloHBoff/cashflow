import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      background: ${props => props.theme.colors.secundary};
      box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.3);

      &:first-child {
        color: ${props => props.theme.colors.textHighlight};
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }

      &:last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }

      &.green {
        color: ${props => props.theme.colors.green};
      }

      &.red {
        color: ${props => props.theme.colors.red};
      }
    }
  }
`
