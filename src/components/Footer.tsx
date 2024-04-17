import * as React from 'react'
import { Container, Typography } from '@mui/material'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: 'lightgray',
          marginTop: 'auto',
          paddingTop: '20px',
        }}
      >
        <Typography> thanks for visiting! </Typography>
        <Typography variant="body2" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit" href="https://proofolio.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </>
  )
}

export default Footer
