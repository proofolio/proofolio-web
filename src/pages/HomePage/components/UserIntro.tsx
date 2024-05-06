import { useState, useEffect } from 'react'
import Icon from '@mui/material/Icon'
import { Container, Typography, Avatar, Box } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import TechStack from '../../../components/TechStack'
import { getUserInfoAPI } from '../../../api/getAPI'

interface UserInfo {
  jobTitle: string
  name: string
  headShot: string
  backupPictures: string[]
  aboutMe: string
  techStack: string[]
  contactInfo: {
    linkedin: string
    github: string
    email: string
    phone: number
  }
}

const UserIntro = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data } = await getUserInfoAPI()
      setUserInfo(data)
    }

    fetchUserInfo()
  }, [])

  if (!userInfo) return <div>still catching data</div>
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
              words={[userInfo.jobTitle]}
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
          src={userInfo.headShot}
        />
      </Box>
      <Box sx={{ display: 'flex', my: 5 }}>
        <Box sx={{ width: '70%', mr: 5 }}>
          <Typography variant="h4">About Me</Typography>
          <Typography>{userInfo.aboutMe}</Typography>
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
