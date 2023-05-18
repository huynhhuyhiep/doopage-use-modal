// @ts-ignore
import { closeModal, useModal } from '@doopage/use-modal'

const Modal = ({ name }: { name: string }) => {
  const { open, data } = useModal(name)

  if (!open) return null
  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <div>this is modal {name},</div>
      <button onClick={() => closeModal(name)}>close</button>
    </div>
  )
}

export default Modal
