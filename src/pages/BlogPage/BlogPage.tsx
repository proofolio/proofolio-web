import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function BlogPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      Blog Page
      <Footer />
    </Box>
  )
}

export default BlogPage
