import React from 'react'
import { Button } from '@doopage/react-ui-kit'
import { closeModal, useModal } from '@doopage/use-modal'

const Modal = ({ name }: { name: string }) => {
  const { open, payload } = useModal(name)
  console.log(`render modal ${name}`, open, payload?.data?.toString())

  if (!open) return null
  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <div>this is modal {name},</div>
      <Button onClick={() => closeModal(name)}>close</Button>
    </div>
  )
}

export default Modal
