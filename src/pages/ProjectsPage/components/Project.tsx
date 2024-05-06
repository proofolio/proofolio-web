import { Typography, Box, Container } from '@mui/material'
import ReactMarkdown from 'react-markdown'

import TechStack from '../../../components/TechStack'

const DUMMY_PROJECTS = [
  {
    projectId: 1,
    projectTitle: 'TabColab',
    projectTechStack: ['react', 'chromeextension', 'sass'],
    projectIntro: `# Tabcolab \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid undeLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> \n ## hihi \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>`,
    demo: 'https://www.tabextend.com/',
    projectGithub: 'https://github.com/',
  },
  {
    projectId: 2,
    projectTitle: 'BucketList',
    projectTechStack: ['typescript', 'react', 'css'],
    projectIntro: `# BucketList \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid undeLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> \n ## hihi \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>`,
    demo: 'http://proofolio.site/lander',
    projectGithub: 'https://github.com/',
  },
  {
    projectId: 3,
    projectTitle: '2048Game',
    projectTechStack: ['redux', 'html', 'css'],
    projectIntro: `# 2048 \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid undeLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> \n ## hihi \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>`,
    demo: 'https://play2048.co/',
    projectGithub: 'https://github.com/',
  },
  {
    projectId: 4,
    projectTitle: 'Proofolio',
    projectTechStack: ['typescript', 'react', 'materialui'],
    projectIntro: `# Proofolio \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid undeLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p> \n ## hihi \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, alias nisi velit aliquid unde quos ad dolores! Voluptates facilis, nisi ad, ipsum quasi totam cum iure eaque, beatae culpa sapiente. </p>`,
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
      <ReactMarkdown>{selectedProject.projectIntro}</ReactMarkdown>
    </Container>
  )
}
export default Project
