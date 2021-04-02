import { useCallback, useState } from 'react'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { TransactionType } from '../../service/firebase'
import theme from '../../styles/theme'

import { Container, Type, TypeButton } from './styles'

export default function NewTrasaction() {
  const [type, setType] = useState<TransactionType>('Income')

  const handleChangeType = useCallback(
    (type: TransactionType) => setType(type),
    []
  )

  return (
    <Container>
      <h2>Create Transaction</h2>

      <input type="text" placeholder="Title" />
      <input type="number" placeholder="Value" />

      <Type>
        <TypeButton
          type="button"
          onClick={() => handleChangeType('Income')}
          typeSelected={type === 'Income'}
          activeColor={theme.colors.green}
        >
          <img src={income} alt="Income" />
          <span>Income</span>
        </TypeButton>

        <TypeButton
          type="button"
          onClick={() => handleChangeType('Outcome')}
          typeSelected={type === 'Outcome'}
          activeColor={theme.colors.red}
        >
          <img src={outcome} alt="Outcome" />
          <span>Outcome</span>
        </TypeButton>
      </Type>

      <input type="text" placeholder="Category" />

      <button type="submit">Create</button>
    </Container>
  )
}
