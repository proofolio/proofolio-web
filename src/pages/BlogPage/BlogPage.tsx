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
    sectionTitle: 'Topic A',
    sectionIcon: '❄️',
  },
  {
    sectionTitle: 'Topic B',
    sectionIcon: '❄️',
  },
  {
    sectionTitle: 'Topic C',
    sectionIcon: '❄️',
  },
  {
    sectionTitle: 'Topic D',
    sectionIcon: '❄️',
  },
]

function BlogPage() {
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
          <AllBlogs />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default BlogPage
