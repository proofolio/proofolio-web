import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ResumePage from './pages/ResumePage/ResumePage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage/ContactPage'
import { DrawerProvider } from './store/DrawerContext'
import { SectionProvider } from './store/SectionContext'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <DrawerProvider>
      <SectionProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </SectionProvider>
    </DrawerProvider>
  )
}
