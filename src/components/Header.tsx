import { useContext, useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import { DrawerContext } from '../store/DrawerContext'
import { getUserInfo } from '../api/getAPI'

const drawerWidth = 180
const PAGES = [
  { pageName: 'Projects', pageIcon: '🆒' },
  { pageName: 'Resume', pageIcon: '📜' },
  { pageName: 'Blog', pageIcon: '✏️' },
  { pageName: 'Contact', pageIcon: '🤙' },
]
interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))
interface UserInfoType {
  jobTitle: string
  name: string
  logo: string
  headShotUrl: string
  backupPictures: string[]
  aboutMe: string
  techStack: string[]
  contactInfo: {
    linkedin: string
    github: string
    email: string
    phone: string
  }
}
function Header() {
  const [logoURl, setLogoURL] = useState<UserInfoType | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getUserInfo(
        'https://api.proofolio.site/user/user-Info',
        {},
        {}
      )
      setLogoURL(response.response.data)
    }
    fetch()
  }, [])
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('Component must be wrapped with <DrawerContext.Provider>')
  }
  const { openDrawer, setOpenDrawer } = context
  return (
    <AppBar
      position="fixed"
      open={openDrawer}
      sx={{ bgcolor: '#F0E5EB', color: 'black' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpenDrawer(true)}
          edge="start"
          sx={{
            marginRight: 5,
            ...(openDrawer && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/home">
            <img
              alt="logo"
              src={logoURl?.logo}
              width="250px"
              style={{ cursor: 'pointer' }}
            ></img>
          </Link>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {PAGES.map((page, index) => (
            <Button
              key={index}
              sx={{
                my: 2,
                color: 'inherit',
                display: 'block',
              }}
            >
              <Link
                key={page.pageName}
                to={`/${page.pageName}`.toLowerCase()}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography>
                  {/* {page.pageIcon} */}
                  {page.pageName}
                </Typography>
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
