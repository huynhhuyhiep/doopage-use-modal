import { proxy, snapshot, subscribe, useProxy } from 'valtio'

export const modalState = proxy({})

export const openModal = (name: string, payload?: object) => {
  // @ts-ignore
  const { open, key, ...rest } = payload || {}
  modalState[name] = { ...rest } || {}
  modalState[name].open = true
  modalState[name].key = new Date().getTime().toString()
}

export const closeModal = (name: string, clearData: boolean = false) => {
  if (clearData) modalState[name] = {}
  if (modalState[name]) modalState[name].open = false
}

export const useModal = (name: string) => {
  const state = useProxy(modalState)
  return state[name] || { open: false }
}

export const initModal = (name: string) => ({
  open: (payload: any) => openModal(name, payload),
  close: (clearData: boolean = false) => closeModal(name, clearData),
  useModal: () => useModal(name)
})

export const clearAllModalData = () => {
  Object.keys(modalState).forEach((key) => delete modalState[key])
}

export const enableModalLog = () => {
  subscribe(modalState, () => {
    const obj = snapshot(modalState) // A snapshot is an immutable object
    console.log('modalState is mutated', obj)
  })
}
