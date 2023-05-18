// @ts-ignore
import { initModal } from '@doopage/use-modal'

export const modal2 = initModal('modal2')

const Modal2 = () => {
  const { open, data } = modal2.useModal()

  if (!open) return null
  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <div>this is modal 2</div>
      {data?.map((item: number) => (
        <div key={item}>{item}</div>
      ))}
      <button onClick={() => modal2.close(true)}>close</button>
    </div>
  )
}

export default Modal2
