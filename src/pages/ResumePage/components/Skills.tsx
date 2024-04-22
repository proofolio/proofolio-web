import { Container, Typography, Box, List, ListItem } from '@mui/material'

import data from '../../../api/DummyFiles.json'

const DUMMY_SKILLS = data.DUMMY_RUSEME.skills

function Skills() {
  return (
    <Container id="Skills">
      <Typography variant="h2">Skills</Typography>
      <Box>
        <List>
          {DUMMY_SKILLS.map((skill) => (
            <ListItem divider={true}>
              <Box>
                <Typography variant="h4">{skill.skillTitle} : </Typography>
                <Typography variant="h6"> {skill.skillIntro}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Skills
