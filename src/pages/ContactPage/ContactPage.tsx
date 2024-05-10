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
  const bgImage = [
    'https://d10joe98l23w8w.cloudfront.net/personal/bgimage1.jpg',
    'https://d10joe98l23w8w.cloudfront.net/personal/bgimage2.jpg',
    'https://d10joe98l23w8w.cloudfront.net/personal/bgimage3.jpg',
    'https://d10joe98l23w8w.cloudfront.net/personal/bgimage4.jpg',
  ]

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
            maxWidth: '100%',
            overflowX: 'auto',
          }}
        >
          <Typography variant="h4" textAlign={'center'} sx={{ my: 2 }}>
            leave a message?
          </Typography>
          <Container
            sx={{
              width: '100%',
              display: { sx: 'block', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <form style={{ width: '100%', marginTop: '-20px' }}>
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
              <Button
                variant="contained"
                type="submit"
                sx={{ bgcolor: '#F0E5EB', color: 'black' }}
              >
                Submit
              </Button>
            </form>
            <Carousel
              IndicatorIcon
              navButtonsAlwaysInvisible
              sx={{
                width: '100%',
              }}
            >
              {bgImage.map((image, index) => (
                <Box
                  component="img"
                  key={index}
                  alt={image}
                  src={image}
                  sx={{
                    margin: '0 auto',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    marginLeft: { xs: 0, md: 3 },
                    marginTop: { xs: 3, md: 0 },
                  }}
                ></Box>
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
