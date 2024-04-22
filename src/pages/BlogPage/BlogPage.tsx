import { Box, CssBaseline, Typography, Container } from '@mui/material'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
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
        <SideDrawer sections={DUMMY_SECTIONS} sectionLabel="Topics" />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          <Container>
            <Typography variant="h3" textAlign={'center'}>
              Welcome to my blog{' '}
            </Typography>
            <AllBlogs />
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default BlogPage
