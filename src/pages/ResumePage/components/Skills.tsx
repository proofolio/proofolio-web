import { useState, useEffect } from 'react'
import { Container, Typography, Box, List, ListItem } from '@mui/material'

import { getResumeAPI } from '../../../api/getAPI'

interface SkillProp {
  skillType: string
  skillTitle: string
  skillIntro: string
  certificate: string
}

function Skills() {
  const [skills, setSkills] = useState<SkillProp[] | null>(null)

  useEffect(() => {
    const fetchSkills = async () => {
      const { data } = await getResumeAPI()
      setSkills(data.skills)
    }

    fetchSkills()
  }, [])

  if (!skills) return <div>still catching data</div>
  return (
    <Container id="Skills" sx={{ my: '15px' }}>
      <Typography variant="h4">Skills</Typography>
      <Box>
        <List>
          {skills.map((skill) => (
            <ListItem divider={true}>
              <Box>
                <Typography variant="h5">{skill.skillTitle} : </Typography>
                <Typography> {skill.skillIntro}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Skills
