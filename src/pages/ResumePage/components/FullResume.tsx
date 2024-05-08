import { Container, Typography, Box, Button, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Experience from './Experience'
import Language from './Language'
import Skills from './Skills'
import Academic from './Academic'

function FullResume() {
  return (
    <Container id="Full Resume">
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: '20px',
          }}
        >
          <Typography variant="h3">Hi this is my full resume</Typography>
          <Button>
            <Typography variant="h5">download resume</Typography>
          </Button>
        </Box>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          suscipit sapiente tempora libero obcaecati beatae commodi voluptatem,
          asperiores ab deserunt nihil iusto voluptatum in aspernatur at
          molestiae vel maxime dicta?
        </Typography>
        <GitHubIcon />
        <LinkedInIcon />
        <Divider />
      </Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Academic />
        <Divider />
        <Language />
        <Divider />
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
