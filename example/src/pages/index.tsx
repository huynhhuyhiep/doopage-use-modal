import { Inter } from 'next/font/google'
import { clearAllModalData, openModal } from '@doopage/use-modal'
import React from 'react'
import Modal from '@/modal/Modal'
import Modal2, { modal2 } from '@/modal/Modal2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={() => openModal('modal1')}>open modal 1</button>
      <Modal name={'modal1'} />
      <button onClick={() => modal2.open({ data: [1, 2, 3] })}>
        open modal 2
      </button>
      <Modal2 />
      <button onClick={() => clearAllModalData()}>clear all data modal</button>
    </main>
  )
}
