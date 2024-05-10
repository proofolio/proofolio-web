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
        justifyContent: { sx: 'flex-start', md: 'center' },
        height: '90vh',
        m: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { md: 'space-between' },
          flexDirection: { xs: 'column', md: 'row' },
          // my: 3,
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
          <Box
            component="img"
            alt={userInfo.name}
            src={userInfo.headShotUrl}
            sx={{
              width: '50%',
              borderRadius: '20px',
              objectFit: 'cover',
              display: { xs: 'block', md: 'none' },
              mb: 2,
            }}
          ></Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '8px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LinkedInIcon />
              <Typography variant="caption">
                {userInfo.contactInfo.linkedin}
              </Typography>
              <GitHubIcon />
              <Typography variant="caption">
                {userInfo.contactInfo.github}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <EmailIcon />
              <Typography variant="caption">
                {userInfo.contactInfo.email}
              </Typography>
              <PhoneIphoneIcon />
              <Typography variant="caption" sx={{ marginLeft: '-6px' }}>
                {userInfo.contactInfo.phone}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          alt={userInfo.name}
          src={userInfo.headShotUrl}
          sx={{
            width: '25%',
            borderRadius: '20px',
            objectFit: 'cover',
            display: { xs: 'none', md: 'block' },
            mr: 4,
          }}
        ></Box>
      </Box>

      <Box sx={{ my: 7 }}>
        <Typography variant="h4">About Me</Typography>
        <Typography variant="subtitle1">{userInfo.aboutMe}</Typography>
      </Box>
      <Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Tech Stack
        </Typography>
        <TechStack techs={userInfo.techStack} />
      </Box>
    </Container>
  )
}

export default UserIntro
