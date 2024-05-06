import { Container, Typography, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import Carousel from 'react-material-ui-carousel'

import TechStack from '../../../components/TechStack'
import data from '../../../api/DummyFiles.json'

const DUMMY_PROJECTS = data.DUMMY_PROJECT_BRIEF

function ProjectBrief() {
  return (
    <Container id="ProjectBrief" sx={{ my: 3 }}>
      <Typography variant="h3" sx={{ my: 3 }}>
        Projects
      </Typography>
      <Carousel sx={{ width: '100%' }}>
        {DUMMY_PROJECTS.map((project) => (
          <Box key={project.projectId} sx={{ display: 'flex' }}>
            <Box>
              <Typography variant="h4">{project.projectTitle}</Typography>
              <Box sx={{ display: 'flex' }}>
                <TechStack techs={project.projectTechStack} />
              </Box>
              <Typography>{project.projectIntro}</Typography>
            </Box>
            <iframe
              id={project.projectId.toString()}
              title={project.projectTitle}
              width="250%"
              height="500px"
              src={project.demo}
            ></iframe>
            <Box>
              <Typography variant="h3">{project.projectTitle}</Typography>
              <a
                href={project.projectGithub}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <GitHubIcon />
              </a>
              <Box sx={{ display: 'flex' }}>
                <TechStack techs={project.projectTechStack} />
              </Box>
              <Typography>{project.projectIntro}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Container>
  )
}

export default ProjectBrief
