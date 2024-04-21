import { useContext } from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

import { DrawerContext } from '../store/DrawerContext'
import { SectionContext } from '../store/SectionContext'
import { Typography } from '@mui/material'

const drawerWidth = 220
const PAGES = [
  { pageName: 'Projects', pageIcon: '🆒' },
  { pageName: 'Resume', pageIcon: '📜' },
  { pageName: 'Blog', pageIcon: '✏️' },
  { pageName: 'Contact', pageIcon: '🤙' },
]

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

interface Sections {
  sectionTitle: string
  sectionIcon: string
  sectionComponent: React.ReactNode
}
interface Props {
  sections?: Array<Sections> | null
}

function SideDrawer({ sections }: Props) {
  const theme = useTheme()

  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('Component must be wrapped with <DrawerContext.Provider>')
  }
  const { openDrawer, setOpenDrawer } = context

  const sectionContext = useContext(SectionContext)
  if (!sectionContext) {
    throw new Error('Component must be wrapped with <SectionContext.Provider>')
  }
  const { setWhichSection } = sectionContext
  return (
    <Drawer variant="permanent" open={openDrawer}>
      <DrawerHeader>
        <IconButton onClick={() => setOpenDrawer(false)}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ display: { xs: 'block', md: 'none' } }}>
        <ListItem>Pages</ListItem>
        {PAGES.map((page) => (
          <Link key={page.pageName} to={`/${page}`.toLowerCase()}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openDrawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {page.pageIcon}
                </ListItemIcon>
                <ListItemText
                  primary={page.pageName}
                  sx={{ opacity: openDrawer ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {sections && <ListItem>Sections</ListItem>}
        {!sections && openDrawer && (
          <Typography>Thanks for visiting!</Typography>
        )}
        {sections &&
          sections.map((section) => (
            <ListItem
              key={section.sectionTitle}
              disablePadding
              sx={{ display: 'block' }}
              onClick={() => setWhichSection(section.sectionTitle)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: openDrawer ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: openDrawer ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {section.sectionIcon}
                </ListItemIcon>
                <ListItemText
                  primary={section.sectionTitle}
                  sx={{ opacity: openDrawer ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
}

export default SideDrawer
