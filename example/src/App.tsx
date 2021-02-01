import React from 'react'
// @ts-ignore
import Button from '@doopage/react-ui-kit/dist/es/Button'
import { openModal } from '@doopage/use-modal'
import Modal from './modal/Modal'
import Modal2, { modal2 } from './modal/Modal2'
import { enableModalLog, clearAllModalData } from '@doopage/use-modal'

enableModalLog()

const App = () => {
  return (
    <>
      <Button onClick={() => openModal('modal1')}>open modal 1</Button>
      <Modal name={'modal1'} />
      <Button onClick={() => modal2.open({ data: [1, 2, 3] })}>
        open modal 2
      </Button>
      <Modal2 />
      <Button onClick={() => clearAllModalData()}>clear all data modal</Button>
    </>
  )
}

export default App
