import React from 'react'
import { createContext, useState, ReactNode } from 'react'

interface DrawerContextType {
  openDrawer: boolean
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

interface DrawerProviderProps {
  children: ReactNode
}

const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export { DrawerContext, DrawerProvider }
