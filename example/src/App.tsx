import React from 'react'
import { Button } from '@doopage/react-ui-kit'
import { openModal } from '@doopage/use-modal'
import Modal from './modal/Modal'
import Modal2, { modal2 } from './modal/Modal2'

const App = () => {
  return (
    <>
      <Button onClick={() => openModal('modal1')}>open modal 1</Button>
      <Modal name={'modal1'} />
      <Button onClick={() => modal2.open({ data: [1, 2, 3] })}>
        open modal 2
      </Button>
      <Modal2 />
    </>
  )
}

export default App
