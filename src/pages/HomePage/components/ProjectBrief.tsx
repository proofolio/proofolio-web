import { useState, useEffect } from 'react'
import { Container, Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
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
    <Container id="ProjectBrief" sx={{ my: 3 }}>
      <Typography variant="h3" sx={{ my: 3 }}>
        Projects
      </Typography>
      <Carousel
        sx={{
          width: '100%',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '2px 2px 11px 0px rgba(0,0,0,0.75);',
        }}
      >
        {projectBrief &&
          projectBrief.map((project) => (
            <Box key={project.projectId} sx={{ display: 'flex' }}>
              <Box sx={{ m: 2 }}>
                <Typography variant="h4">{project.projectTitle}</Typography>
                <Box sx={{ display: 'flex', my: 2 }}>
                  <TechStack techs={project.projectTechStack} />
                </Box>
                <Typography sx={{ pr: 2 }}>{project.projectIntro}</Typography>
              </Box>
              <iframe
                id={project.projectId.toString()}
                title={project.projectTitle}
                width="100%"
                height="500px"
                src={project.demoUrl}
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  margin: '10px',
                }}
              ></iframe>
            </Box>
          ))}
      </Carousel>
    </Container>
  )
}

export default ProjectBrief
