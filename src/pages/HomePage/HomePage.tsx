import { Box, CssBaseline, Divider } from '@mui/material'

import Header from '../../components/Header'
import SideDrawer from '../../components/Drawer'
import UserIntro from './components/UserIntro'
import ProjectBrief from './components/ProjectBrief'
import BlogBrief from './components/BlogBrief'
import Footer from '../../components/Footer'
import data from '../../api/DummyFiles.json'

const DUMMY_SECTIONS = data.DUMMY_SECTIONS.homepage

function HomePage() {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <CssBaseline />
        <Header />
        <SideDrawer sections={DUMMY_SECTIONS} sectionLabel="Sections" />
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
