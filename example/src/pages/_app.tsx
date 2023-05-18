import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalProvider } from '@doopage/use-modal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider showLog={true}>
      <Component {...pageProps} />
    </ModalProvider>
  )
}
