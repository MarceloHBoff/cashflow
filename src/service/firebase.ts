import firebase from 'firebase'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  appId: process.env.REACT_APP_FIREBASE_APPID
})

export type TransactionType = 'Outcome' | 'Income'

export type Transaction = {
  id: string
  title: string
  type: TransactionType
  value: number
  category: string
  date: string
}

export type TransactionInput = Omit<Transaction, 'id'>

const db = firebase.database()

const getAllTransactions = async (): Promise<Transaction[]> => {
  const data = await db.ref('transactions').get()
  const result = data.toJSON()

  if (result) {
    const values = Object.values(result) as Transaction[]
    const keys = Object.keys(result)
    return values.map((value, index) => ({ ...value, id: keys[index] }))
  } else return []
}

const insertTransaction = async (data: TransactionInput) => {
  const response = await db.ref('transactions').push({
    ...data,
    created_at: firebase.database.ServerValue.TIMESTAMP
  })

  // @ts-ignore
  const newTrasaction = { ...data, id: response.path.pieces_[1] }

  return newTrasaction
}

const removeTransaction = async (id: string) => {
  await db.ref(`transactions/${id}`).remove()
}

export { getAllTransactions, insertTransaction, removeTransaction }
