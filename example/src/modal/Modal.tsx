// @ts-ignore
import Button from '@doopage/react-ui-kit/dist/es/Button'
import { closeModal, useModal } from '@doopage/use-modal'

const Modal = ({ name }: { name: string }) => {
  const { open, data } = useModal(name)
  console.log(`render modal ${name}`, open, data?.toString())

  if (!open) return null
  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <div>this is modal {name},</div>
      <Button onClick={() => closeModal(name)}>close</Button>
    </div>
  )
}

export default Modal
