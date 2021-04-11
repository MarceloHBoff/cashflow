import { useMemo } from 'react'

import close from '../../assets/close.svg'
import { useTransaction } from '../../hooks/transaction'
import formatNumber from '../../utils/formatNumber'

import { Container } from './styles'

export default function TransactionTable() {
  const { transactions, deleteTransaction } = useTransaction()

  const listTransactions = useMemo(
    () =>
      transactions.map(transaction => ({
        ...transaction,
        value: formatNumber(transaction.value),
        date: `${transaction.date.substr(8, 2)}/${transaction.date.substr(
          5,
          2
        )}/${transaction.date.substr(0, 4)}`
      })),
    [transactions]
  )

  return (
    <Container>
      <table>
        <table>
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Title</th>
              <th style={{ width: '30%' }}>Category</th>
              <th style={{ width: '15%' }}>Value</th>
              <th style={{ width: '10%' }}>Date</th>
              <th style={{ width: '5%' }}></th>
            </tr>
          </thead>
        </table>

        <div>
          <table>
            <tbody>
              {listTransactions.map(transaction => (
                <tr key={transaction.id}>
                  <td style={{ width: '40%' }}>{transaction.title}</td>
                  <td style={{ width: '30%' }}>{transaction.category}</td>
                  <td
                    style={{ width: '15%' }}
                    className={transaction.type === 'Income' ? 'green' : 'red'}
                  >
                    {transaction.value}
                  </td>
                  <td style={{ width: '10%' }}>{transaction.date}</td>
                  <td style={{ width: '5%' }}>
                    <button onClick={() => deleteTransaction(transaction.id)}>
                      <img src={close} alt="delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </table>
    </Container>
  )
}
