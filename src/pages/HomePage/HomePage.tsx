import { useState, useEffect } from 'react'
import { Box, CssBaseline, Container } from '@mui/material'

import Header from '../../components/Header'
import SideDrawer from '../../components/Drawer'
import UserIntro from './components/UserIntro'
import ProjectBrief from './components/ProjectBrief'
import BlogBrief from './components/BlogBrief'
import Footer from '../../components/Footer'
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

function HomePage() {
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
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <CssBaseline />
        <Header />
        {sections && (
          <SideDrawer sections={sections?.homepage} sectionLabel="Sections" />
        )}
        <Box
          component={'main'}
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: '60px',
          }}
        >
          <Container>
            <UserIntro />
            <ProjectBrief />
            <BlogBrief />
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default HomePage
