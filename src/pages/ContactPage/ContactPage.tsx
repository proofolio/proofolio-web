import { useState, useEffect } from 'react'
import { Box, Container, CssBaseline, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Carousel from 'react-material-ui-carousel'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import { getUserInfo } from '../../api/getAPI'

const ContactPage = () => {
  const [backupPictures, setBackupPictures] = useState<string[]>([])

  useEffect(() => {
    async function fetch() {
      const response = await getUserInfo(
        'https://api.proofolio.site/user/user-info',
        {},
        {}
      )
      setBackupPictures(response.response.data.backupPictures)
    }
    fetch()
  }, [])
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minHeight: '96vh',
        }}
      >
        <CssBaseline />
        <Header />
        <SideDrawer sections={null} sectionLabel="Thanks for visiting!" />
        <Box
          component={'main'}
          sx={{
            p: 3,
            marginTop: '60px',
            width: '100%',
          }}
        >
          <Typography variant="h5" textAlign={'center'}>
            leave a message?
          </Typography>
          <Container
            sx={{
              width: '100%',
              display: { sx: 'block', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <form style={{ width: '100%', marginTop: '30px' }}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ display: 'block' }}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Leave your message here!"
                multiline
                rows={8}
                margin="normal"
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
            <Carousel
              IndicatorIcon
              navButtonsAlwaysInvisible
              sx={{
                width: '100%',
                m: '30px',
              }}
            >
              {backupPictures.map((image, index) => (
                <img
                  alt="contactPageImg"
                  src={image}
                  key={index}
                  width={600}
                  style={{ margin: '0 auto' }}
                ></img>
              ))}
            </Carousel>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ContactPage
