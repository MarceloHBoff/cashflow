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
  inserTransaction,
  Transaction,
  TransactionInput
} from '../service/firebase'

type TransactionContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
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
      const newTrasaction = await inserTransaction({ ...transaction })
      setTransactions(t => [...t, newTrasaction])
    },
    []
  )

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext)

  return context
}

export { TransactionProvider, useTransaction }
