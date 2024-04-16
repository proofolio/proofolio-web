import * as React from 'react';
import { Container, Typography } from '@mui/material'
import Link from '@mui/material/Link';

function Footer() {
  return (
    <>
    <div>Footer</div>

    <Container sx={{display:'flex', justifyContent:'center', my:3}}>
      <Typography> thanks for visting! </Typography>
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





