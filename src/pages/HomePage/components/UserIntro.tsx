import Icon from '@mui/material/Icon'
import { Container, Typography, Avatar, Box } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import TechStack from '../../../components/TechStack'

const DUMMY_CONTACT = {
  linkedin: 'linkedin.com',
  github: 'url',
  email: 'email@email.com',
  phone: '123456789',
}

const DUMMY_TECHS: Array<string> = ['html', 'css', 'javascript', 'npm']

const UserIntro = () => {
  return (
    <Container id="UserIntro">
      <Container
        sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}
      >
        <Box>
          <Typography variant="h3">
            Hi there, I'm Daphne <Icon fontSize="large">grass</Icon>
          </Typography>
          <Typography variant="h4">
            <Typewriter
              words={['Frontend Developer']}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <LinkedInIcon></LinkedInIcon>
            <GitHubIcon></GitHubIcon>
            <EmailIcon />
            <Typography>{DUMMY_CONTACT.email}</Typography>
            <PhoneIphoneIcon />
            <Typography>{DUMMY_CONTACT.phone}</Typography>
          </Box>
        </Box>
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt="name"
          src="https://mighty.tools/mockmind-api/content/cartoon/32.jpg"
        />
      </Container>
      <Container
        sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}
      >
        <Box>
          <Typography variant="h4">About Me</Typography>
          <Typography>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            quas incidunt, repellendus quis, enim ea officia nemo natus vel
            inventore dolorem ad praesentium eligendi ipsum molestiae et
            voluptates rerum non.
          </Typography>
        </Box>
        <TechStack techs={DUMMY_TECHS} />
      </Container>
    </Container>
  )
}

export default UserIntro
