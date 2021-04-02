import { FC } from 'react'

import { ModalProvider } from './modal'

const AppProvider: FC = ({ children }) => (
  <ModalProvider>{children}</ModalProvider>
)

export default AppProvider
