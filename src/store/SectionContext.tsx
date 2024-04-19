import React from 'react'
import { createContext, useState, ReactNode } from 'react'

interface SectionContextType {
  whichSection: string
  setWhichSection: React.Dispatch<React.SetStateAction<string>>
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

interface SectionProviderProps {
  children: ReactNode
}

const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
  const [whichSection, setWhichSection] = useState<string>('')
  return (
    <SectionContext.Provider value={{ whichSection, setWhichSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export { SectionContext, SectionProvider }
