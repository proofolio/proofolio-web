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
              words={[userInfo.jobTitle]}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <a
              href={userInfo.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <LinkedInIcon />
            </a>
            <a
              href={userInfo.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <GitHubIcon />
            </a>
            <EmailIcon />
            <Typography>{userInfo.contactInfo.email}</Typography>
            <PhoneIphoneIcon />
            <Typography>{userInfo.contactInfo.phone}</Typography>
          </Box>
        </Box>
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt="name"
          src={userInfo.headShot}
        />
      </Container>
      <Container
        sx={{ display: 'flex', justifyContent: 'space-between', my: 3 }}
      >
        <Box>
          <Typography variant="h4">About Me</Typography>
          <Typography>{userInfo.aboutMe}</Typography>
        </Box>
        <TechStack techs={userInfo.techStack} />
      </Container>
    </Container>
  )
}

export default UserIntro
