# @doopage/use-modal

> Simple way to control modal 

[![NPM](https://img.shields.io/npm/v/@doopage/use-modal.svg)](https://www.npmjs.com/package/@doopage/use-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @doopage/use-modal
```

## Usage

### Call function
in Modal.js
```tsx
import { closeModal, useModal } from '@doopage/use-modal'

const Modal = () => {
  const { open, data } = useModal('modal_name')
  
  if (!open) return null
  return (
    <div>
      {/* modal content */}
      <Button onClick={() => closeModal('modal_name')}>close</Button>
    </div>
  )
}

export default Modal
```

in somewhere
```tsx
import { openModal } from '@doopage/use-modal'

openModal('modal_name')
```

### use InitModal
in MyModal.js
```tsx
import { closeModal, useModal, initModal } from '@doopage/use-modal'

export const MyModal = initModal('modal_name')

const Modal = () => {
  const { open, data } = MyModal.useModal()
  
  if (!open) return null
  return (
    <div>
      {/* modal content */}
      <Button onClick={() => MyModal.close()}>close</Button>
    </div>
  )
}

export default Modal
```

in somewhere
```tsx
import { MyModal } from 'path/MyModal.js'

MyModal.open({ data:[1,2,3] })
```

## License

MIT © [huynhhuyhiep](https://github.com/huynhhuyhiep)
