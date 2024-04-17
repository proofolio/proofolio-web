import * as React from 'react'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const drawerWidth = 200
interface Section {
  name: string
  icon: string
}

interface SideDrawerProps {
  sections: Array<Section>
  handleListItemClick: (projectName: string) => void
}

export default function SideDrawer({
  sections,
  handleListItemClick,
}: SideDrawerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isClosing, setIsClosing] = React.useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  const drawer = (
    <div>
      <Divider />
      <List>
        {sections.map((section) => (
          <ListItemButton
            key={section.name}
            onClick={() => handleListItemClick(section.name)}
          >
            <ListItemIcon>{section.icon}</ListItemIcon>
            <ListItemText primary={section.name} />
          </ListItemButton>
        ))}
      </List>
    </div>
  )

  return (
    <>
      {/* drawer mobile/ pc */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            marginTop: '70px',
            maxHeight: '85%',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  )
}
