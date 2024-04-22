import {
  Typography,
  Box,
  Container,
  List,
  ListItem,
  Divider,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

import TechStack from '../../../components/TechStack'
import data from '../../../api/DummyFiles.json'

const DUMMY_PROJECTS = data.DUMMY_PROJECT_BRIEF

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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{selectedProject.projectTitle}</Typography>
        <a
          href={selectedProject.projectGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <GitHubIcon />
        </a>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TechStack techs={selectedProject.projectTechStack} />
      </Box>
      <Typography variant="body1">{selectedProject.projectIntro}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <List>
          <Typography variant="h5">Features</Typography>
          {selectedProject.projectFeatures.map((feature) => (
            <ListItem>
              <Typography>{feature.featureTitle}</Typography>
            </ListItem>
          ))}
        </List>
        <iframe
          id={selectedProject.projectId.toString()}
          title={selectedProject.projectTitle}
          width="400px"
          height="200px"
          src={selectedProject.demo}
        ></iframe>
      </Box>
      <Divider sx={{ my: '15px' }} />
      {selectedProject.projectFeatures.map((feature) => (
        <Box>
          <Typography variant="h5">{feature.featureTitle}</Typography>
          <Typography>{feature.featureIntro}</Typography>
          <img alt={feature.featureTitle} src={feature.featureDemo}></img>
        </Box>
      ))}
    </Container>
  )
}
export default Project
