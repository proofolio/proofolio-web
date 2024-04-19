import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
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

function ProjectBrief() {
  return (
    <>
      <div>ProjectBrief</div>
      <Container sx={{ display: 'flex', my: 3 }}>
        <Carousel sx={{ width: '100%' }}>
          {DUMMY_PROJECTS.map((project) => (
            <Box key={project.projectId} sx={{ display: 'flex' }}>
              <iframe
                id={project.projectId.toString()}
                title={project.projectTitle}
                width="250%"
                height="500px"
                src={project.demo}
              ></iframe>
              <Box>
                <Typography variant="h3">{project.projectTitle}</Typography>
                <Box sx={{ display: 'flex' }}>
                  <TechStack techs={project.projectTechStack} />
                </Box>
                <Typography>{project.projectIntro}</Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Container>
    </>
  )
}

export default ProjectBrief
