import { createContext, ReactNode, useState } from 'react'

interface SignInContextProviderProps {
  children: ReactNode
}

interface SignInContextType {
  showModal: boolean
  toggleShowModal: (show: boolean) => void
}

export const SignInContext = createContext({} as SignInContextType)

export function SignInContextProvider({
  children,
}: SignInContextProviderProps) {
  const [showModal, setShowModal] = useState(false)

  function toggleShowModal(show: boolean) {
    setShowModal(show)
  }

  return (
    <SignInContext.Provider
      value={{
        showModal,
        toggleShowModal,
      }}
    >
      {children}
    </SignInContext.Provider>
  )
}
