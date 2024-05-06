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
  github: 'github.com',
  email: 'email@email.com',
  phone: '123456789',
}

const DUMMY_TECHS: Array<string> = ['html', 'css', 'javascript', 'npm']

const UserIntro = () => {
  return (
    <Container id="UserIntro">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          my: 3,
          padding: '0',
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ my: '5px' }}>
            Hi there, I'm Daphne <Icon fontSize="large">grass</Icon>
          </Typography>
          <Typography variant="h4" sx={{ my: '10px' }}>
            <Typewriter
              words={['Frontend Developer']}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Typography>
          <Box sx={{ display: 'flex', my: '10px' }}>
            <LinkedInIcon />
            <Typography sx={{ mx: '8px' }}>
              {DUMMY_CONTACT.linkedin}｜
            </Typography>
            <GitHubIcon />
            <Typography sx={{ mx: '8px' }}>{DUMMY_CONTACT.github}｜</Typography>
            <EmailIcon />
            <Typography sx={{ mx: '8px' }}>{DUMMY_CONTACT.email}｜</Typography>
            <PhoneIphoneIcon />
            <Typography sx={{ mx: '8px' }}>{DUMMY_CONTACT.phone}</Typography>
          </Box>
        </Box>
        <Avatar
          sx={{ width: 120, height: 120, mr: 10 }}
          alt="name"
          src="https://mighty.tools/mockmind-api/content/cartoon/32.jpg"
        />
      </Box>
      <Box sx={{ display: 'flex', my: 5 }}>
        <Box sx={{ width: '70%', mr: 5 }}>
          <Typography variant="h4">About Me</Typography>
          <Typography>
            {' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            quas incidunt, repellendus quis, enim ea officia nemo natus vel
            inventore dolorem ad praesentium eligendi ipsum molestiae et
            voluptates rerum non.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae quas incidunt, repellendus quis, enim ea
            officia nemo natus vel inventore dolorem ad praesentium eligendi
            ipsum molestiae et voluptates rerum non.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">Tech Stack</Typography>
          <Box sx={{ display: 'flex' }}>
            <TechStack techs={DUMMY_TECHS} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default UserIntro
