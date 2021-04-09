import { FC } from 'react'

import { ModalProvider } from './modal'
import { TransactionProvider } from './transaction'

const AppProvider: FC = ({ children }) => (
  <TransactionProvider>
    <ModalProvider>{children}</ModalProvider>
  </TransactionProvider>
)

export default AppProvider
