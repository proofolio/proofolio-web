import { useContext } from 'react'
import { Box, CssBaseline } from '@mui/material'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import FullResume from './components/FullResume'
import Academic from './components/Academic'
import Skills from './components/Skills'
import Language from './components/Language'
import Experience from './components/Experience'

import { SectionContext } from '../../store/SectionContext'

const DUMMY_SECTIONS = [
  {
    sectionTitle: 'Full Resume',
    sectionIcon: '🛠️',
    sectionComponent: <FullResume />,
  },
  {
    sectionTitle: 'Academic',
    sectionIcon: '🏫',
    sectionComponent: <Academic />,
  },
  { sectionTitle: 'Skills', sectionIcon: '💯', sectionComponent: <Skills /> },
  {
    sectionTitle: 'Language',
    sectionIcon: '🔤',
    sectionComponent: <Language />,
  },
  {
    sectionTitle: 'Experience',
    sectionIcon: '💼',
    sectionComponent: <Experience />,
  },
]

function ResumePage() {
  const sectionContext = useContext(SectionContext)
  if (!sectionContext) {
    throw new Error('Component must be wrapped with <SectionContext.Provider>')
  }
  const { whichSection } = sectionContext
  const sectionIndex = DUMMY_SECTIONS.findIndex(
    (section) => section.sectionTitle === whichSection
  )

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '96vh' }}>
        <CssBaseline />
        <Header />
        <SideDrawer sections={DUMMY_SECTIONS} />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          {sectionIndex === -1 ? (
            <FullResume />
          ) : (
            DUMMY_SECTIONS[sectionIndex].sectionComponent
          )}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ResumePage
