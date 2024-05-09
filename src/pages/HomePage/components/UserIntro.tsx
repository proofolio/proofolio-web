import { useState, useEffect } from 'react'
import Icon from '@mui/material/Icon'
import { Container, Typography, Avatar, Box } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import TechStack from '../../../components/TechStack'
import { getUserInfo } from '../../../api/getAPI'

interface UserInfoType {
  jobTitle: string
  name: string
  headShotUrl: string
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
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getUserInfo(
        'https://api.proofolio.site/user/user-info',
        {},
        {}
      )
      setUserInfo(response.response.data)
    }
    fetch()
  }, [])

  if (!userInfo) return <div>still catching data</div>
  return (
    <Container
      id="UserIntro"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
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
          <Typography variant="h2" sx={{ my: '5px' }}>
            Hi there, I'm {userInfo.name} <Icon fontSize="large">grass</Icon>
          </Typography>
          <Typography variant="h3" sx={{ my: '10px' }}>
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
              {userInfo.contactInfo.linkedin}｜
            </Typography>
            <GitHubIcon />
            <Typography sx={{ mx: '8px' }}>
              {userInfo.contactInfo.github}｜
            </Typography>
            <EmailIcon />
            <Typography sx={{ mx: '8px' }}>
              {userInfo.contactInfo.email}｜
            </Typography>
            <PhoneIphoneIcon />
            <Typography sx={{ mx: '8px' }}>
              {userInfo.contactInfo.phone}
            </Typography>
          </Box>
        </Box>
        <Avatar
          sx={{ width: 120, height: 120, mr: 10 }}
          alt="name"
          src={userInfo.headShotUrl}
        />
      </Box>

      <Box sx={{ width: '70%', my: 7 }}>
        <Typography variant="h3">About Me</Typography>
        <Typography>{userInfo.aboutMe}</Typography>
      </Box>
      <Box>
        <Typography variant="h3">Tech Stack</Typography>
        <Box sx={{ display: 'flex' }}>
          <TechStack techs={userInfo.techStack} />
        </Box>
      </Box>
    </Container>
  )
}

export default UserIntro
