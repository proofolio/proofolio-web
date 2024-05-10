import { Container, Typography, Box } from '@mui/material'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#F0E5EB',
        py: '10px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2" sx={{ mr: 1 }}>
          {' '}
          THANKS FOR VISITING !{' '}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit" href="https://proofolio.com/">
            Proofolio
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer
