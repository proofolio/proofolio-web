import { useState, useEffect } from 'react'
import { Container, Typography, Box, List, ListItem } from '@mui/material'

import { getResumeAPI } from '../../../api/getAPI'

interface AcademicsProp {
  schoolName: string
  degree: string
  timeLine: string
  gpa: number
}
interface DiplomaProp {
  chinese: string
  english: string
}
function Academic() {
  const [academics, setAcademics] = useState<AcademicsProp[] | null>(null)
  const [diploma, setDiploma] = useState<DiplomaProp[] | null>(null)

  useEffect(() => {
    const fetchAcademics = async () => {
      const { data } = await getResumeAPI()
      setAcademics(data.academics)
      setDiploma(data.diploma)
    }

    fetchAcademics()
  }, [])

  if (!academics) return <div>still catching data</div>
  if (!diploma) return <div>still catching data</div>

  return (
    <Container id="Academic" sx={{ my: '15px' }}>
      <Typography variant="h4">Academics</Typography>
      <Box>
        <Box sx={{ display: 'flex' }}>
          {academics.map((school) => (
            <Box sx={{ margin: '10px', width: '33%' }}>
              <Typography variant="h6"> {school.degree}</Typography>
              <Typography variant="h6">{school.schoolName} : </Typography>
              <Typography>{school.timeLine}</Typography>
              <Typography>{school.gpa}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <img alt="chinese diploma" src={diploma[0].chinese}></img>
          <img alt="english diploma" src={diploma[1].english}></img>
        </Box>
      </Box>
    </Container>
  )
}

export default Academic
