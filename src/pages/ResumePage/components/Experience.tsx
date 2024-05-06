import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from '@mui/lab'
import { Container, Typography, Avatar } from '@mui/material'

const DUMMY_EXPERIENCES = [
  {
    companyName: 'Alpha Camp',
    industry: 'Tech, Education',
    companyLogo: 'https://avatars.githubusercontent.com/u/8667311?s=280&v=4',
    jobTitle: 'Frontend Developer',
    timeLine: 'Nov.2023 ~ April.2024',
    jobIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem voluptates animi numquam expedita eaque temporibus quia iure illum id.',
  },
  {
    companyName: 'Anke Media Corp',
    industry: 'Long-Term Care , Media',
    companyLogo: 'https://www.ankecare.com/assets/images/about/anke.png',
    jobTitle: 'Event specialist',
    timeLine: 'March.2023 ~ October.2024',
    jobIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem voluptates animi numquam expedita eaque temporibus quia iure illum id.',
  },
  {
    companyName: 'Impact Hub Taipei',
    industry: 'Social Enterprise',
    companyLogo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTm9dpemZhDUhoiUGIxxYTLnefm-G3lpW-9ryMo748Q&s',
    jobTitle: 'Corporate Innovation Team Intern',
    timeLine: 'Jan.2022 ~ June.2022',
    jobIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem voluptates animi numquam expedita eaque temporibus quia iure illum id.',
  },
  {
    companyName: 'BenQ HeadQuarter',
    industry: 'Tech',
    companyLogo:
      'https://www.benq.com/etc/designs/g6/clientlib-site/img/header-icon/nav-icon-benq-logo.png',
    jobTitle: 'US/UK Digital Marketing Intern',
    timeLine: 'July.2021 ~ Jan.2022',
    jobIntro:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolore minus, exercitationem earum unde excepturi ut saepe quas eos voluptatem voluptates animi numquam expedita eaque temporibus quia iure illum id.',
  },
]

function Experience() {
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
              <Typography>{experience.jobIntro}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  )
}

export default Experience
