import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function ResumePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      Resume Page
      <Footer />
    </Box>
  )
}

export default ResumePage
