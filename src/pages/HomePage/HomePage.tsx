import { Box, CssBaseline } from '@mui/material'

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
  },
  {
    sectionTitle: 'ProjectBrief',
    sectionIcon: '🗄️',
  },
  {
    sectionTitle: 'BlogBrief',
    sectionIcon: '✍️',
  },
]

function HomePage() {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '96vh' }}>
        <CssBaseline />
        <Header />
        <SideDrawer sections={DUMMY_SECTIONS} />
        <Box
          component={'main'}
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: '60px',
          }}
        >
          <UserIntro />
          <ProjectBrief />
          <BlogBrief />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default HomePage
