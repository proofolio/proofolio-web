import { useState, useEffect } from 'react'
import { Container, Typography, Box, List, ListItem } from '@mui/material'

import { getResumeAPI } from '../../../api/getAPI'

interface LanguageProp {
  languageName: string
  proficiency: string
}

function Language() {
  const [languages, setLanguages] = useState<LanguageProp[] | null>(null)

  useEffect(() => {
    const fetchLanguages = async () => {
      const { data } = await getResumeAPI()
      setLanguages(data.languages)
    }

    fetchLanguages()
  }, [])

  if (!languages) return <div>still catching data</div>
  return (
    <Container id="Language" sx={{ my: '15px' }}>
      <Typography variant="h4">Languages</Typography>
      <Box>
        <List>
          {languages.map((language) => (
            <ListItem>
              <Typography variant="h6">{language.languageName} : </Typography>
              <Typography> {language.proficiency}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default Language
