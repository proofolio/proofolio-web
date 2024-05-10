import { useState, useEffect } from 'react'
import {
  Typography,
  Box,
  Container,
  List,
  Divider,
  ListItem,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import ReactMarkdown from 'react-markdown'
import TechStack from '../../../components/TechStack'
import { getProjectBrief } from '../../../api/getAPI'

interface ProjectProps {
  selectedIndex: number
}

interface ProjectBriefType {
  projectId: number
  projectTitle: string
  projectTechStack: string[]
  projectIntro: string
  projectDetail: string
  projectGithub: string
  demoUrl: string
  featureList: string[]
}

const Project: React.FC<ProjectProps> = ({ selectedIndex }) => {
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
  const selectedProject =
    projectBrief &&
    projectBrief.find((project, index) => index === selectedIndex)

  if (!selectedProject) {
    return <div>No project found</div>
  }

  return (
    <Container>
      <Box>
        <Typography variant="h2" sx={{ my: 1 }}>
          {selectedProject.projectTitle}
        </Typography>
        <a
          href={selectedProject.projectGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '16px',
          }}
        >
          <GitHubIcon />
          <Typography variant="caption" sx={{ ml: 1, color: 'darkblue' }}>
            {selectedProject.projectGithub}
          </Typography>
        </a>
        <a
          href={selectedProject.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            display: 'flex',
            marginBottom: '10px',
            alignItems: 'center',
            paddingLeft: '16px',
          }}
        >
          <LanguageIcon />
          <Typography variant="caption" sx={{ ml: 1, color: 'darkblue' }}>
            {selectedProject.demoUrl}
          </Typography>
        </a>
      </Box>

      <Typography variant="body1" sx={{ my: 3, pl: '16px' }}>
        {selectedProject.projectIntro}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', mb: 1, alignItems: 'center' }}>
            <Typography variant="h5" sx={{ mr: 2 }}>
              Tech Stack
            </Typography>
            <TechStack techs={selectedProject.projectTechStack} />
          </Box>
          <List>
            <Typography variant="h5">Features</Typography>
            {selectedProject.featureList.map((feature, index) => (
              <ListItem key={index} sx={{ width: '100%', pl: 0 }}>
                <ReactMarkdown>{feature}</ReactMarkdown>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <iframe
            id={selectedProject.projectId.toString()}
            title={selectedProject.projectTitle}
            width="600px"
            height="400px"
            src={selectedProject.demoUrl}
            style={{ border: 'none', borderRadius: '10px' }}
          ></iframe>
        </Box>
      </Box>
      <Divider sx={{ my: '15px' }} />

      <ReactMarkdown>{selectedProject.projectDetail}</ReactMarkdown>
    </Container>
  )
}
export default Project
