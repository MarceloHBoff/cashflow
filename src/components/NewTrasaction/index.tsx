import { FormEvent, useCallback, useState } from 'react'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { useModal } from '../../hooks/modal'
import { useTransaction } from '../../hooks/transaction'
import { TransactionType } from '../../service/firebase'
import theme from '../../styles/theme'

import { Container, Type, TypeButton } from './styles'

export default function NewTrasaction() {
  const [data, setData] = useState({
    title: '',
    value: 0,
    category: '',
    date: new Date().toISOString().substring(0, 10)
  })
  const [type, setType] = useState<TransactionType>('Income')

  const { close } = useModal()
  const { createTransaction } = useTransaction()

  const changeType = useCallback((type: TransactionType) => setType(type), [])

  const handleInputChange = useCallback(
    (prop, value) => {
      setData({ ...data, [prop]: value })
    },
    [data]
  )

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      await createTransaction({ ...data, type })
      close()
    },
    [data, type, close, createTransaction]
  )

  return (
    <Container onSubmit={handleSubmit}>
      <h2>Create Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        value={data.title}
        onChange={e => handleInputChange('title', e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Value"
        value={data.value}
        onChange={e => handleInputChange('value', Number(e.target.value))}
        required
      />

      <Type>
        <TypeButton
          type="button"
          onClick={() => changeType('Income')}
          typeSelected={type === 'Income'}
          activeColor={theme.colors.green}
        >
          <img src={income} alt="Income" />
          <span>Income</span>
        </TypeButton>

        <TypeButton
          type="button"
          onClick={() => changeType('Outcome')}
          typeSelected={type === 'Outcome'}
          activeColor={theme.colors.red}
        >
          <img src={outcome} alt="Outcome" />
          <span>Outcome</span>
        </TypeButton>
      </Type>

      <input
        type="text"
        placeholder="Category"
        value={data.category}
        onChange={e => handleInputChange('category', e.target.value)}
        required
      />

      <input
        type="date"
        placeholder="Date"
        value={data.date}
        onChange={e => handleInputChange('date', e.target.value)}
        required
      />

      <button type="submit">Create</button>
    </Container>
  )
}
