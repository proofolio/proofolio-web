import { useState, useEffect } from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from '@mui/lab'
import { Container, Typography, Avatar, Divider } from '@mui/material'
import ReactMarkdown from 'react-markdown'

import { getResume } from '../../../api/getAPI'

interface ExperienceProp {
  companyName: string
  industry: string
  companyLogo: string
  jobTitle: string
  timeLine: string
  jobIntro: string
}

function Experience() {
  const [experiences, setExperiences] = useState<ExperienceProp[] | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getResume(
        'https://api.proofolio.site/user/resume',
        {},
        {}
      )

      setExperiences(response.response.data.experiences)
    }
    fetch()
  }, [])

  if (!experiences) return <div>still catching data</div>
  return (
    <Container id="Experience" sx={{ my: '15px' }}>
      <Typography variant="h5">Work Experiences</Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experiences.map((experience) => (
          <TimelineItem sx={{ marginTop: '10px' }}>
            <TimelineSeparator>
              <TimelineDot variant="outlined">
                <Avatar
                  alt={experience.companyName}
                  src={experience.companyLogo}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle2">{experience.timeLine}</Typography>
              <Typography variant="h6">{experience.jobTitle}</Typography>
              <Typography variant="body2">{experience.companyName}</Typography>
              <Typography variant="subtitle2">{experience.industry}</Typography>
              <Typography variant="subtitle1">
                <ReactMarkdown>{experience.jobIntro}</ReactMarkdown>
              </Typography>
              <Divider sx={{ my: '10px' }} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default Experience
