import { useContext } from 'react'
import { Box } from '@mui/material'

import Header from '../../components/Header'
import SideDrawer from '../../components/Drawer'
import Footer from '../../components/Footer'
import Project from './components/Project'
import { SectionContext } from '../../store/SectionContext'

const SECTIONS = [
  {
    sectionTitle: 'TabColab',
    sectionIcon: '🗂️',
    sectionComponent: <Project selectedIndex={0} />,
  },
  {
    sectionTitle: '2048Game',
    sectionIcon: '🧩',
    sectionComponent: <Project selectedIndex={1} />,
  },
  {
    sectionTitle: 'BucketList',
    sectionIcon: '📝',
    sectionComponent: <Project selectedIndex={2} />,
  },
  {
    sectionTitle: 'Proofolio',
    sectionIcon: '☺️',
    sectionComponent: <Project selectedIndex={3} />,
  },
]

function ProjectsPage() {
  const sectionContext = useContext(SectionContext)
  if (!sectionContext) {
    throw new Error('Component must be wrapped with <SectionContext.Provider>')
  }
  const { whichSection } = sectionContext

  const sectionIndex = SECTIONS.findIndex(
    (section) => section.sectionTitle === whichSection
  )

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minHeight: '96vh',
        }}
      >
        <Header />
        <SideDrawer sections={SECTIONS} sectionLabel="Projects" />
        <Box
          component={'main'}
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: '60px',
            maxWidth: '100%',
            overflowX: 'auto',
            width: '100%',
          }}
        >
          {sectionIndex === -1
            ? SECTIONS[0].sectionComponent
            : SECTIONS[sectionIndex].sectionComponent}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ProjectsPage
