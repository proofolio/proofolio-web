import { useState, useEffect } from 'react'
import { Container, Typography, Box, Avatar } from '@mui/material'

import { getResume } from '../../../api/getAPI'

interface educationsProp {
  schoolName: string
  degree: string
  schoolLogo: string
  timeLine: string
  gpa: string
}
interface DiplomaProp {
  chinese?: string
  english?: string
  alphaCamp?: string
}

function Education() {
  const [educations, setEducations] = useState<educationsProp[] | null>(null)
  const [diploma, setDiploma] = useState<DiplomaProp[] | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getResume(
        'https://api.proofolio.site/user/resume',
        {},
        {}
      )

      setEducations(response.response.data.educations)
      setDiploma(response.response.data.diploma)
    }
    fetch()
  }, [])

  if (!educations) return <div>still catching data</div>
  if (!diploma) return <div>still catching data</div>

  return (
    <Container id="education" sx={{ my: '15px' }}>
      <Typography variant="h5">Education</Typography>
      <Box>
        <Box
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
        >
          {educations.map((school) => (
            <Box sx={{ margin: '10px', width: { xs: '100%', md: '33%' } }}>
              <Box sx={{ display: { xs: 'flex', md: 'block' } }}>
                <Avatar
                  src={school.schoolLogo}
                  sx={{ width: '30px', height: '30px', mr: 1 }}
                ></Avatar>
                <Typography variant="h6">{school.schoolName} </Typography>
              </Box>
              <Typography variant="body1"> {school.degree}</Typography>
              <Typography variant="subtitle2">{school.timeLine}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'flex-start',
            mb: 2,
            gap: '13%',
          }}
        >
          <img alt="alpha diploma" src={diploma[0].alphaCamp}></img>
          <img alt="chinese diploma" src={diploma[1].chinese}></img>
          <img alt="english diploma" src={diploma[2].english}></img>
        </Box>
      </Box>
    </Container>
  )
}

export default Education
