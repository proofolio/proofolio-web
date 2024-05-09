import { useState, useEffect } from 'react'
import { Box, CssBaseline } from '@mui/material'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import FullResume from './components/FullResume'
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
function ResumePage() {
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
      <Box sx={{ display: 'flex', minHeight: '96vh' }}>
        <CssBaseline />
        <Header />
        {sections && (
          <SideDrawer sections={sections?.resumepage} sectionLabel="Sections" />
        )}
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          <FullResume />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ResumePage
