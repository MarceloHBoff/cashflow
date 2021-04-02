import {
  createContext,
  useContext,
  useCallback,
  FC,
  ReactNode,
  useState
} from 'react'
import Modal from 'react-modal'

import closeSvg from '../assets/close.svg'

interface ModalContextData {
  open: () => void
  close: () => void
  setChild: (child: ReactNode) => void
}

Modal.setAppElement('#root')

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

const ModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(null as ReactNode)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const setChild = useCallback((child: ReactNode) => setContent(child), [])

  return (
    <ModalContext.Provider value={{ open, close, setChild }}>
      {children}

      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <button className="close-modal" type="button" onClick={close}>
          <img src={closeSvg} alt="Close Modal" />
        </button>
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

function useModal(): ModalContextData {
  const context = useContext(ModalContext)

  return context
}

export { ModalProvider, useModal }
