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
    <Container id="Skills" sx={{ my: '15px' }}>
      <Typography variant="h4">Skills</Typography>
      <Box>
        <List>
          {DUMMY_SKILLS.map((skill, index) => (
            <ListItem divider={index !== DUMMY_SKILLS.length - 1}>
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
