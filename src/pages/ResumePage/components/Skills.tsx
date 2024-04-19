import { Container, Typography, Box, List, ListItem } from '@mui/material'

const DUMMY_SKILLS = [
  {
    skillType: 'string',
    skillTitle: 'skill 1',
    skillIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem',
    certificate: 'url',
  },
  {
    skillType: 'string',
    skillTitle: 'skill 2',
    skillIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem',
    certificate: 'url',
  },
  {
    skillType: 'string',
    skillTitle: 'skill 3',
    skillIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem',
    certificate: 'url',
  },
  {
    skillType: 'string',
    skillTitle: 'skill 4',
    skillIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem',
    certificate: 'url',
  },
]

function Skills() {
  return (
    <Container>
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
