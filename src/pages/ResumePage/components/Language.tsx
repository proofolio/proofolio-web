import { Container, Typography, Box, List, ListItem } from '@mui/material'

const DUMMY_LANGUAGE = [
  {
    languageName: 'Mandarin',
    proficiency: 'Native speaker',
  },
  {
    languageName: 'English',
    proficiency: 'Advanced ( TOEFL : 106 ) ',
  },
  {
    languageName: 'Taiwanese',
    proficiency: 'Advanced',
  },
]

function Language() {
  return (
    <Container id="Language">
      <Typography variant="h2">Languages</Typography>
      <Box>
        <List>
          {DUMMY_LANGUAGE.map((language) => (
            <ListItem>
              <Typography variant="h5">{language.languageName} : </Typography>
              <Typography variant="h6"> {language.proficiency}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Language
