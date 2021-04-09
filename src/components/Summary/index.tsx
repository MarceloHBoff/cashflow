import { useMemo } from 'react'

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransaction } from '../../hooks/transaction'
import formatNumber from '../../utils/formatNumber'

import * as S from './styles'

export default function Summary() {
  const { transactions } = useTransaction()

  const totalIncome = useMemo(
    () =>
      transactions
        .filter(t => t.type === 'Income')
        .reduce((acc, transaction) => acc + transaction.value, 0),
    [transactions]
  )

  const totalOutcome = useMemo(
    () =>
      transactions
        .filter(t => t.type === 'Outcome')
        .reduce((acc, transaction) => acc + transaction.value, 0),
    [transactions]
  )

  const totalBalance = useMemo(() => totalIncome - totalOutcome, [
    totalIncome,
    totalOutcome
  ])

  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <p>Incomes</p>
          <img src={income} alt="incomes" />
        </S.CardHeader>

        <strong>{formatNumber(totalIncome)}</strong>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <p>Outcomes</p>
          <img src={outcome} alt="Outcomes" />
        </S.CardHeader>

        <strong>{formatNumber(totalOutcome)}</strong>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <p>Total</p>
          <img src={total} alt="total" />
        </S.CardHeader>

        <strong>{formatNumber(totalBalance)}</strong>
      </S.Card>
    </S.Container>
  )
}
