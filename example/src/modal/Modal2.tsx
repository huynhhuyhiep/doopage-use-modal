// @ts-ignore
import Button from '@doopage/react-ui-kit/dist/es/Button'
import { initModal } from '@doopage/use-modal'

export const modal2 = initModal('modal2')

const Modal2 = () => {
  const { open, data } = modal2.useModal()
  console.log(`render modal 2`, open)

  if (!open) return null
  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <div>this is modal 2</div>
      {data?.map((item: number) => (
        <div key={item}>{item}</div>
      ))}
      <Button onClick={() => modal2.close(true)}>close</Button>
    </div>
  )
}

export default Modal2
