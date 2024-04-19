import { Container, Typography, Box, Button, Divider } from '@mui/material'

import Experience from './Experience'
import Language from './Language'
import Skills from './Skills'
import Academic from './Academic'

function FullResume() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: '20px',
        }}
      >
        <Typography variant="h3">Hi this is my full resume</Typography>
        <Button>
          <Typography variant="h5">download resume</Typography>
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box>
          <Academic />
          <Language />
        </Box>
        <Skills />
      </Box>
      <Divider />
      <Box>
        <Experience />
      </Box>
    </Container>
  )
}

export default FullResume
