import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ContactPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      Contact Page
      <Footer />
    </Box>
  )
}

export default ContactPage
