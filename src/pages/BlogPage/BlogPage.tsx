import { useContext } from 'react'
import { Box, CssBaseline, Typography } from '@mui/material'

import { SectionContext } from '../../store/SectionContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import SingleBlog from './components/SingleBlog'
import AllBlogs from './components/AllBlogs'

const DUMMY_SECTIONS = [
  {
    sectionTitle: 'AllBlogs',
    sectionIcon: '❄️',
    sectionComponent: <AllBlogs />,
  },
  {
    sectionTitle: 'Topic A',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog selectedIndex={0} />,
  },
  {
    sectionTitle: 'Topic B',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog selectedIndex={1} />,
  },
  {
    sectionTitle: 'Topic C',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog selectedIndex={2} />,
  },
  {
    sectionTitle: 'section4',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog selectedIndex={3} />,
  },
]

function BlogPage() {
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
      <Box
        sx={{
          display: 'flex',
          minHeight: '96vh',
        }}
      >
        <CssBaseline />
        <Header />
        <SideDrawer sections={DUMMY_SECTIONS} />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          {sectionIndex === -1 ? (
            <AllBlogs />
          ) : (
            DUMMY_SECTIONS[sectionIndex].sectionComponent
          )}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default BlogPage
