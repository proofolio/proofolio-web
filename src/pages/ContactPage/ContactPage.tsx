import {
  Box,
  Container,
  CssBaseline,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Carousel from 'react-material-ui-carousel'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'

const DUMMY_PICS = [
  'https://picsum.photos/id/10/400/300',
  'https://picsum.photos/id/20/400/300',
  'https://picsum.photos/id/30/400/300',
]

const ContactPage = () => {
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
        <SideDrawer sections={null} />
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
              {DUMMY_PICS.map((image, index) => (
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
