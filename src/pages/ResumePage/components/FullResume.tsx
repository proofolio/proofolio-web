import { useState, useEffect } from 'react'
import { Container, Typography, Box, Button, Divider } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import Experience from './Experience'
import Language from './Language'
import Skills from './Skills'
import Education from './Education'
import { getResume } from '../../../api/getAPI'

interface IntroProp {
  username: string
  aboutMe: string
  updatedDate: string
  fullResume: string
}

function FullResume() {
  const [intro, setIntro] = useState<IntroProp | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getResume(
        'https://api.proofolio.site/user/resume',
        {},
        {}
      )

      setIntro(response.response.data.intro)
    }
    fetch()
  }, [])
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
          <Typography variant="h4">Hello, my name is Daphne</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button>
              <a href={intro?.fullResume} download>
                <Typography variant="subtitle2"> download resume</Typography>
              </a>
            </Button>
            <Typography
              variant="caption"
              sx={{ mt: -1, display: { xs: 'none', sm: 'inline' } }}
            >
              updated at: {intro?.updatedDate}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mb: 3 }}>
          <ReactMarkdown>{intro?.aboutMe}</ReactMarkdown>
        </Typography>

        <Divider />
      </Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Education />
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
