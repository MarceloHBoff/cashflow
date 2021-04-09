import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.text};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;

      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.secundary};
      background: ${theme.colors.secundary};

      font-size: 1rem;

      &::placeholder {
        color: #aaa;
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type='submit'] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;

      background: ${theme.colors.green};
      color: ${theme.colors.text};
      font-size: 1rem;
      margin-top: 1.5rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`

export const Type = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

type TypeButtonProps = {
  typeSelected: boolean
  activeColor: string
}

export const TypeButton = styled.button<TypeButtonProps>`
  ${({ theme, typeSelected, activeColor }) => css`
    height: 4rem;
    border: 1px solid ${theme.colors.secundary};
    border-radius: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: filter 0.2s;

    ${typeSelected &&
    css`
      border-color: ${transparentize(0.1, activeColor)};
      background: ${transparentize(0.9, activeColor)};
    `}

    &:hover {
      border-color: ${transparentize(0.1, activeColor)};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 16px;
      color: ${theme.colors.text};
    }
  `}
`
