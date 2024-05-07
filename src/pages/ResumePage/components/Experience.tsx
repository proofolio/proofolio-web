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
import { Container, Typography, Avatar, Box, Divider } from '@mui/material'

import { getResumeAPI } from '../../../api/getAPI'

interface ExperienceProp {
  companyName: string
  industry: string
  companyLogo: string
  jobTitle: string
  timeLine: string
  jobIntro: [
    {
      jobDetail: string
      detailImage: string
    },
  ]
}

function Experience() {
  const [experiences, setExperiences] = useState<ExperienceProp[] | null>(null)

  useEffect(() => {
    const fetchExperiences = async () => {
      const { data } = await getResumeAPI()
      setExperiences(data.experiences)
    }

    fetchExperiences()
  }, [])

  if (!experiences) return <div>still catching data</div>
  return (
    <Container id="Experience" sx={{ my: '15px' }}>
      <Typography variant="h4">Work Experiences</Typography>
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
              <Typography>{experience.timeLine}</Typography>
              <Typography variant="h5">{experience.jobTitle}</Typography>
              <Typography>{experience.companyName}</Typography>
              <Typography>{experience.industry}</Typography>
              <Divider sx={{ my: '10px' }} />
              {experience.jobIntro.map((job) => (
                <Box sx={{ display: 'flex' }}>
                  <Typography>{job.jobDetail}</Typography>
                  <img alt={experience.jobTitle} src={job.detailImage}></img>
                </Box>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default Experience
