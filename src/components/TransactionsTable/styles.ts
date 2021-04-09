import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    padding: 0 1rem;

    th {
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      text-align: left;
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

    div {
      max-height: 400px;
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 40px;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 40px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
`
