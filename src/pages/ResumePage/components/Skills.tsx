import { useState, useEffect } from 'react'
import { Container, Typography, Box, List, ListItem } from '@mui/material'

import { getResume } from '../../../api/getAPI'

interface SkillProp {
  skillType: string
  skillTitle: Array<string>
}

function Skills() {
  const [skills, setSkills] = useState<SkillProp[] | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getResume(
        'https://api.proofolio.site/user/resume',
        {},
        {}
      )

      setSkills(response.response.data.skills)
    }
    fetch()
  }, [])

  if (!skills) return <div>still catching data</div>
  return (
    <Container id="Skills" sx={{ my: '15px' }}>
      <Typography variant="h5">Skills</Typography>
      <Box>
        <List>
          {skills.map((skill) => (
            <ListItem>
              <Box>
                <Typography variant="h6">{skill.skillType} : </Typography>
                <Typography variant="body2">
                  {' '}
                  {skill.skillTitle.join('、')}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Skills
