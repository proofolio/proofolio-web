import React, { useState } from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import TechStack from '../../components/TechStack'
import Header from '../../components/Header'
import SideDrawer from '../../components/Drawer'
import Footer from '../../components/Footer'

const DUMMY_PROJECTS = [
  {
    projectId: 1,
    projectTitle: 'TabColab',
    projectTechStack: ['react', 'chromeextension', 'sass'],
    projectIntro:
      '<p>TabColab Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>',
    demo: 'https://www.tabextend.com/',
    projectGithub: 'https://github.com/',
  },
  {
    projectId: 2,
    projectTitle: 'BucketList',
    projectTechStack: ['typescript', 'react', 'css'],
    projectIntro:
      '<p> BucketList Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>',
    demo: 'http://proofolio.site/lander',
    projectGithub: 'https://github.com/',
  },
  {
    projectId: 3,
    projectTitle: '2048Game',
    projectTechStack: ['redux', 'html', 'css'],
    projectIntro:
      '<p> 2048Game Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>',
    demo: 'https://play2048.co/',
    projectGithub: 'https://github.com/',
  },
  {
    projectId: 4,
    projectTitle: 'Proofolio',
    projectTechStack: ['typescript', 'react', 'materialui'],
    projectIntro:
      '<p> <h1>Proofolio</h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>',
    demo: 'http://proofolio.site/lander',
    projectGithub: 'https://github.com/',
  },
]
const DUMMY_SECTIONS = [
  { name: 'TabColab', icon: '🗂️' },
  { name: '2048Game', icon: '🧩' },
  { name: 'BucketList', icon: '📝' },
  { name: 'Proofolio', icon: '☺️' },
]
function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(DUMMY_PROJECTS[0])

  const handleListItemClick = (projectName: string) => {
    const project = DUMMY_PROJECTS.find((p) => p.projectTitle === projectName)
    if (project) {
      setSelectedProject(project)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SideDrawer
              sections={DUMMY_SECTIONS}
              handleListItemClick={handleListItemClick}
            />
          </Grid>
          <Grid item xs={12} md={8} justifyContent="center">
            <Typography variant="h5">{selectedProject.projectTitle}</Typography>
            <Box sx={{ display: 'flex' }}>
              <TechStack techs={selectedProject.projectTechStack} />
            </Box>
            <Typography variant="body1">
              {selectedProject.projectIntro}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  )
}

export default ProjectsPage
