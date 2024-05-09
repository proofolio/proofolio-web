import { useState, useEffect } from 'react'
import { Box, CssBaseline, Typography, Container, Divider } from '@mui/material'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import AllBlogs from './components/AllBlogs'
import { getSections } from '../../api/getAPI'

type SectionType = {
  sectionTitle: string
  sectionIcon: string
}

type SectionsType = {
  homepage: SectionType[]
  resumepage: SectionType[]
  blogpage: SectionType[]
}

function BlogPage() {
  const [sections, setSections] = useState<SectionsType | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getSections(
        'https://api.proofolio.site/user/sections',
        {},
        {}
      )
      setSections(response.response.data)
    }
    fetch()
  }, [])
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
        {sections && (
          <SideDrawer sections={sections?.blogpage} sectionLabel="Topics" />
        )}
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          <Container>
            <Typography variant="h4" textAlign={'center'}>
              Welcome to my study notes !{' '}
            </Typography>
            <Typography textAlign={'center'}>
              Join in with me to become a better developer
            </Typography>
            <Divider sx={{ my: 2 }} />
            <AllBlogs />
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default BlogPage
