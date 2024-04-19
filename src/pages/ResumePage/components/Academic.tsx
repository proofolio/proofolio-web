import { Container, Typography, Box, List, ListItem } from '@mui/material'

const DUMMY_ACADEMICS = [
  {
    schoolName: 'NCCU, Taiwan',
    degree: ' bachelor Education',
    timeLine: 'Sep.2018 - Jan.2023',
    gpa: '3',
  },
  {
    schoolName: 'NCCU ,Taiwan',
    degree: ' bachelor Business Administration',
    timeLine: 'Sep.2019 - Jan.2023',
    gpa: 'number',
  },
  {
    schoolName: 'Masstrict Univeristy ,Netherlands',
    degree: ' exchange ',
    timeLine: 'Aug.2022 - Jan.2023',
    gpa: '',
  },
]
const DUMMY_DIPLOMA = [
  {
    chinese: 'https://fakeimg.pl/250x100/',
  },
  {
    english: 'https://fakeimg.pl/250x100/',
  },
]
function Academic() {
  return (
    <Container>
      <Typography variant="h2">Academics</Typography>
      <Box>
        <List>
          {DUMMY_ACADEMICS.map((school) => (
            <ListItem divider={true}>
              <Box>
                <Typography variant="h5"> {school.degree}</Typography>
                <Typography variant="h6">{school.schoolName} : </Typography>
                <Typography>{school.timeLine}</Typography>
                <Typography>{school.gpa}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img alt="chinese diploma" src={DUMMY_DIPLOMA[0].chinese}></img>
          <img alt="english diploma" src={DUMMY_DIPLOMA[1].english}></img>
        </Box>
      </Box>
    </Container>
  )
}

export default Academic
