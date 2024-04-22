import { Box, CssBaseline } from '@mui/material'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import FullResume from './components/FullResume'
import data from '../../api/DummyFiles.json'

const DUMMY_SECTIONS = data.DUMMY_SECTIONS.resumepage

function ResumePage() {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '96vh' }}>
        <CssBaseline />
        <Header />
        <SideDrawer sections={DUMMY_SECTIONS} sectionLabel="Sections" />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          <FullResume />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ResumePage
