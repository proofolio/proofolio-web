import { useContext } from 'react'
import { Box, CssBaseline } from '@mui/material'

import { SectionContext } from '../../store/SectionContext'
import Header from '../../components/Header'
import SideDrawer from '../../components/Drawer'
import UserIntro from './components/UserIntro'
import ProjectBrief from './components/ProjectBrief'
import BlogBrief from './components/BlogBrief'
import Footer from '../../components/Footer'

const DUMMY_SECTIONS = [
  {
    sectionTitle: 'UserIntro',
    sectionIcon: '😊',
    sectionComponent: <UserIntro />,
  },
  {
    sectionTitle: 'ProjectBrief',
    sectionIcon: '🗄️',
    sectionComponent: <ProjectBrief />,
  },
  {
    sectionTitle: 'BlogBrief',
    sectionIcon: '✍️',
    sectionComponent: <BlogBrief />,
  },
]

function HomePage() {
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
            <>
              <UserIntro />
              <ProjectBrief />
              <BlogBrief />
            </>
          ) : (
            DUMMY_SECTIONS[sectionIndex].sectionComponent
          )}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default HomePage
