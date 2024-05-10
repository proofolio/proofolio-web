import { useState, useEffect } from 'react'
import { Container, Typography, Box, List, ListItem } from '@mui/material'

import { getResume } from '../../../api/getAPI'

interface LanguageProp {
  languageName: string
  proficiency: string
}

function Language() {
  const [languages, setLanguages] = useState<LanguageProp[] | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getResume(
        'https://api.proofolio.site/user/resume',
        {},
        {}
      )

      setLanguages(response.response.data.languages)
    }
    fetch()
  }, [])

  if (!languages) return <div>still catching data</div>
  return (
    <Container id="Language" sx={{ my: '15px' }}>
      <Typography variant="h5">Languages</Typography>
      <Box>
        <List>
          {languages.map((language) => (
            <ListItem>
              <Typography variant="body1">
                {language.languageName} :{'  '}
              </Typography>
              <Typography variant="subtitle1" sx={{ pl: 1 }}>
                {' '}
                {language.proficiency}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Language
