import React from 'react'
import { Avatar } from '@mui/material'

type LogoPoolType = {
  [key: string]: string
}

const logoPool: LogoPoolType = {
  html: 'https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png?f=webp&w=256',
  css: 'https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256',
  typescript:
    'https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp',
  javascript:
    'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
  // js : https://cdn.iconscout.com/icon/free/png-512/free-javascript-2038874-1720087.png?f=webp&w=256
  react:
    'https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256',
  github:
    'https://cdn.iconscout.com/icon/free/png-512/free-github-163-761603.png?f=webp&w=256',
  redux:
    'https://cdn.iconscout.com/icon/free/png-512/free-redux-3521674-2945118.png?f=webp&w=256',
  materialui: 'https://mui.com/static/logo.png',
  npm: 'https://cdn.iconscout.com/icon/free/png-512/free-npm-3521612-2945056.png?f=webp&w=256',
  chromeextension:
    'https://cdn.iconscout.com/icon/free/png-512/free-google-chrome-5-722700.png?f=webp&w=256',
  sass: 'https://cdn.iconscout.com/icon/free/png-512/free-sass-3629037-3030394.png?f=webp&w=256',
}

interface TechStackProps {
  techs: string[]
}

const TechStack: React.FC<TechStackProps> = ({ techs }) => {
  const techStacks = techs.map((tech) => {
    return { tech, logo: logoPool[tech] }
  })

  return (
    <>
      {techStacks.map((techStack) => (
        <Avatar
          key={techStack.tech}
          src={techStack.logo}
          alt={techStack.tech}
        />
      ))}
    </>
  )
}

export default TechStack
