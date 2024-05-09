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
        <Typography variant="h2">{selectedProject.projectTitle}</Typography>
        <a
          href={selectedProject.projectGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none', display: 'flex' }}
        >
          <GitHubIcon />
          <Typography sx={{ ml: 1 }}>
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
          }}
        >
          <LanguageIcon />
          <Typography sx={{ ml: 1 }}>{selectedProject.demoUrl}</Typography>
        </a>
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        just a brief intro of project {selectedProject.projectIntro}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ mr: 4 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h5" sx={{ mr: 2 }}>
              Tech Stack:
            </Typography>
            <TechStack techs={selectedProject.projectTechStack} />
          </Box>
          <List>
            <Typography variant="h5">Features</Typography>
            {selectedProject.featureList.map((feature, index) => (
              <ListItem key={index}>{feature}</ListItem>
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
          ></iframe>
        </Box>
      </Box>
      <Divider sx={{ my: '15px' }} />

      <ReactMarkdown>{selectedProject.projectDetail}</ReactMarkdown>
    </Container>
  )
}
export default Project
