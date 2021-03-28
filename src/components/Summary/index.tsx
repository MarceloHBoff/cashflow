import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import * as S from './styles'

export default function Summary() {
  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <p>Incomes</p>
          <img src={income} alt="incomes" />
        </S.CardHeader>
        <strong>R$ 1000,00</strong>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <p>Outcomes</p>
          <img src={outcome} alt="Outcomes" />
        </S.CardHeader>
        <strong>R$ 1000,00</strong>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <p>Total</p>
          <img src={total} alt="total" />
        </S.CardHeader>
        <strong>R$ 1000,00</strong>
      </S.Card>
    </S.Container>
  )
}
