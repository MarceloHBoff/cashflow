import {
  createContext,
  useContext,
  useCallback,
  FC,
  useState,
  useEffect
} from 'react'

import {
  getAllTransactions,
  insertTransaction,
  removeTransaction,
  Transaction,
  TransactionInput
} from '../service/firebase'

type TransactionContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  deleteTransaction: (id: string) => Promise<void>
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

const TransactionProvider: FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    getAllTransactions().then(data => setTransactions(data))
  }, [])

  const createTransaction = useCallback(
    async (transaction: TransactionInput) => {
      const newTrasaction = await insertTransaction({ ...transaction })
      setTransactions(t => [...t, newTrasaction])
    },
    []
  )

  const deleteTransaction = useCallback(async (id: string) => {
    await removeTransaction(id)
    setTransactions(t => t.filter(tr => tr.id !== id))
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, createTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext)

  return context
}

export { TransactionProvider, useTransaction }
