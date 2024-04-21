import { Typography, Box, Container } from '@mui/material'

import TechStack from '../../../components/TechStack'

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

interface ProjectProps {
  selectedIndex: number
}

const Project: React.FC<ProjectProps> = ({ selectedIndex }) => {
  const selectedProject = DUMMY_PROJECTS.find(
    (project, index) => index === selectedIndex
  )

  if (!selectedProject) {
    return <div>No project found</div>
  }

  return (
    <Container>
      <Typography variant="h2">{selectedProject.projectTitle}</Typography>
      <Box sx={{ display: 'flex' }}>
        <TechStack techs={selectedProject.projectTechStack} />
      </Box>
      <Typography variant="body1">{selectedProject.projectIntro}</Typography>
    </Container>
  )
}
export default Project
