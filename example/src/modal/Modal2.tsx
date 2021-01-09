import React from 'react'
import { Button } from '@doopage/react-ui-kit'
import { initModal } from '@doopage/use-modal'

export const modal2 = initModal('modal2')

const Modal2 = () => {
  const { open, payload } = modal2.useModal()
  const { data } = payload
  console.log(`render modal 2`, open, data)

  if (!open) return null
  return (
    <div style={{ backgroundColor: 'gray', padding: 20 }}>
      <div>this is modal 2</div>
      {data.map((item: number) => (
        <div key={item}>{item}</div>
      ))}
      <Button onClick={modal2.close}>close</Button>
    </div>
  )
}

export default Modal2
