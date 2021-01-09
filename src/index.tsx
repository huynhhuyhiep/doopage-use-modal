import { proxy, useProxy } from 'valtio'

const modalState = proxy({})

export const openModal = (name: string, payload?: object) => {
  modalState[name] = payload
  modalState[name].open = true
  modalState[name].key = new Date().getTime().toString()
}

export const closeModal = (name: string) => {
  if (modalState[name]) modalState[name].open = false
}

export const useModal = (name: string) => {
  const state = useProxy(modalState)
  return state[name] || { open: false }
}

export const initModal = (name: string) => ({
  open: (payload: any) => openModal(name, payload),
  close: () => closeModal(name),
  useModal: () => useModal(name)
})
