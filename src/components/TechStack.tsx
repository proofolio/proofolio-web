import React from 'react'
import { Avatar, Box, Tooltip } from '@mui/material'

type LogoPoolType = {
  [key: string]: string
}

const logoPool: LogoPoolType = {
  HTML: 'https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png?f=webp&w=256',
  CSS: 'https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256',
  TypeScript:
    'https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp',
  JavaScript:
    'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
  // js : https://cdn.iconscout.com/icon/free/png-512/free-javascript-2038874-1720087.png?f=webp&w=256
  React:
    'https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256',
  Github:
    'https://cdn.iconscout.com/icon/free/png-512/free-github-163-761603.png?f=webp&w=256',
  Redux:
    'https://cdn.iconscout.com/icon/free/png-512/free-redux-3521674-2945118.png?f=webp&w=256',
  MaterialUI: 'https://mui.com/static/logo.png',
  npm: 'https://cdn.iconscout.com/icon/free/png-512/free-npm-3521612-2945056.png?f=webp&w=256',
  ChromeExtension:
    'https://cdn.iconscout.com/icon/free/png-512/free-google-chrome-5-722700.png?f=webp&w=256',
  Sass: 'https://cdn.iconscout.com/icon/free/png-512/free-sass-3629037-3030394.png?f=webp&w=256',
  GithubActions: 'https://avatars.githubusercontent.com/u/44036562?s=280&v=4',
  git: 'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256',
  OAuth2: 'https://oauth.net/images/oauth-2-sm.png',
  Firebase:
    'https://cdn.iconscout.com/icon/free/png-512/free-firebase-3628772-3030134.png?f=webp&w=256',
}

interface TechStackProps {
  techs: string[]
}

const TechStack: React.FC<TechStackProps> = ({ techs }) => {
  const techStacks = techs.map((tech) => {
    return { tech, logo: logoPool[tech] }
  })

  return (
    <Box sx={{ display: 'flex' }}>
      {techStacks.map((techStack) => (
        <Tooltip title={techStack.tech}>
          <Avatar
            key={techStack.tech}
            src={techStack.logo}
            alt={techStack.tech}
            sx={{ mr: 1, width: 32, height: 32 }}
          />
        </Tooltip>
      ))}
    </Box>
  )
}

export default TechStack
