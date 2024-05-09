import { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Avatar,
} from '@mui/material'

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
      <Typography variant="h4">Education</Typography>
      <Box>
        <Box sx={{ display: 'flex' }}>
          {educations.map((school) => (
            <Box sx={{ margin: '10px', width: '33%' }}>
              <Avatar src={school.schoolLogo}></Avatar>
              <Typography variant="h6">{school.schoolName} : </Typography>
              <Typography> {school.degree}</Typography>
              <Typography fontSize={12}>{school.timeLine}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
          <img alt="alpha diploma" src={diploma[0].alphaCamp}></img>
          <img alt="chinese diploma" src={diploma[1].chinese}></img>
          <img alt="english diploma" src={diploma[2].english}></img>
        </Box>
      </Box>
    </Container>
  )
}

export default Education
