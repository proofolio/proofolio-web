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

import data from '../../../api/DummyFiles.json'

const DUMMY_EXPERIENCES = data.DUMMY_RUSEME.experiences

function Experience() {
  return (
    <Container id="Experience">
      <Typography variant="h2">Work Experiences</Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {DUMMY_EXPERIENCES.map((experience) => (
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
