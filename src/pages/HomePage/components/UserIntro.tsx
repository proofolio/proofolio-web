import Icon from '@mui/material/Icon'
import { Container, Typography, Avatar, Box } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import TechStack from '../../../components/TechStack'
import data from '../../../api/DummyFiles.json'

const DUMMY_USER_INFO = data.DUMMY_USER_INFO

const UserIntro = () => {
  return (
    <Container id="UserIntro">
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: 3,
        }}
      >
        <Box>
          <Typography variant="h3">
            Hi there, I'm Daphne <Icon fontSize="large">grass</Icon>
          </Typography>
          <Typography variant="h4">
            <Typewriter
              words={[DUMMY_USER_INFO.jobTitle]}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <a
              href={DUMMY_USER_INFO.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <LinkedInIcon />
            </a>
            <a
              href={DUMMY_USER_INFO.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <GitHubIcon />
            </a>
            <EmailIcon />
            <Typography>{DUMMY_USER_INFO.contactInfo.email}</Typography>
            <PhoneIphoneIcon />
            <Typography>{DUMMY_USER_INFO.contactInfo.phone}</Typography>
          </Box>
        </Box>
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt="name"
          src={DUMMY_USER_INFO.headShot}
        />
      </Container>
      <Container
        sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}
      >
        <Box>
          <Typography variant="h4">About Me</Typography>
          <Typography>{DUMMY_USER_INFO.aboutMe}</Typography>
        </Box>
        <TechStack techs={DUMMY_USER_INFO.techStack} />
      </Container>
    </Container>
  )
}

export default UserIntro
