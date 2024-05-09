import { useState, useEffect } from 'react'
import { Container, Typography, Box, Button, Divider } from '@mui/material'

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
          <Typography variant="h4">Hi this is my full resume</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button>
              <a href={intro?.fullResume} download>
                <Typography> download resume</Typography>
              </a>
            </Button>
            <Typography fontSize={10} sx={{ mt: -1 }}>
              updated at: {intro?.updatedDate}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ mb: 3 }}>{intro?.aboutMe}</Typography>

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
