import { useState, useEffect } from 'react'
import { Container, Typography, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import TechStack from '../../../components/TechStack'
import { getProjectBrief } from '../../../api/getAPI'

interface ProjectBriefType {
  projectId: number
  projectTitle: string
  projectTechStack: string[]
  projectIntro: string
  projectGithub: string
  demoUrl: string
  demoVideo?: string
}

function ProjectBrief() {
  const [projectBrief, setProjectBrief] = useState<ProjectBriefType[] | null>(
    null
  )

  useEffect(() => {
    async function fetch() {
      const response = await getProjectBrief(
        'https://api.proofolio.site/user/projects',
        {},
        {}
      )
      setProjectBrief(response.response.data)
    }
    fetch()
  }, [])

  return (
    <Container id="ProjectBrief" sx={{ m: 3 }}>
      <Typography variant="h4" sx={{ my: 3 }}>
        Projects
      </Typography>
      <Carousel
        duration={500}
        sx={{
          width: '100%',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '2px 2px 11px 0px rgba(0,0,0,0.75);',
        }}
      >
        {projectBrief &&
          projectBrief.map((project) => (
            <Box
              key={project.projectId}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box sx={{ m: 2 }}>
                <Typography variant="h5">{project.projectTitle}</Typography>
                <Box sx={{ display: 'flex', my: 2 }}>
                  <TechStack techs={project.projectTechStack} />
                </Box>
                <Typography variant="subtitle1" sx={{ pr: 2 }}>
                  {project.projectIntro}
                </Typography>
              </Box>
              {project.demoVideo && (
                <video
                  width="100%"
                  height="300px"
                  controls
                  autoPlay
                  src={project.demoVideo}
                  style={{
                    borderRadius: '10px',
                    margin: '0 auto',
                  }}
                ></video>
              )}
            </Box>
          ))}
      </Carousel>
    </Container>
  )
}

export default ProjectBrief
