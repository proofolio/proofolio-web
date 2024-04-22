import { Container, Typography, Box, List, ListItem } from '@mui/material'

import data from '../../../api/DummyFiles.json'

const DUMMY_ACADEMICS = data.DUMMY_RUSEME.academics
const DUMMY_DIPLOMA = data.DUMMY_RUSEME.diploma
function Academic() {
  return (
    <Container id="Academic">
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
