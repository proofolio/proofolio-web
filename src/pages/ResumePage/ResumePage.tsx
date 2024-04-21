import { Box, CssBaseline } from '@mui/material'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import FullResume from './components/FullResume'

const DUMMY_SECTIONS = [
  {
    sectionTitle: 'Full Resume',
    sectionIcon: '🛠️',
  },
  {
    sectionTitle: 'Academic',
    sectionIcon: '🏫',
  },
  { sectionTitle: 'Skills', sectionIcon: '💯' },
  {
    sectionTitle: 'Language',
    sectionIcon: '🔤',
  },
  {
    sectionTitle: 'Experience',
    sectionIcon: '💼',
  },
]

function ResumePage() {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '96vh' }}>
        <CssBaseline />
        <Header />
        <SideDrawer sections={DUMMY_SECTIONS} />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          <FullResume />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ResumePage
