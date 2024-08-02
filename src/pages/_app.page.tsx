import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import '../lib/dayjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SignInContextProvider } from '@/contexts/SignInContext'

globalStyles()

const nunito = Nunito({
  subsets: ['latin'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <SignInContextProvider>
            <Component {...pageProps} />
          </SignInContextProvider>
        </QueryClientProvider>
      </SessionProvider>
    </div>
  )
}
