import * as React from 'react'
import { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import { Container, Typography, Box } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RestoreIcon from '@mui/icons-material/Restore'
import { useNavigate } from 'react-router-dom'

import { getBlogBrief } from '../../../api/getAPI'

interface BlogBriefType {
  blogId: number
  blogTitle: string
  blogTopic: string
  publishedDate: string
  heartNum: number
  thumbnail: string
}

function BlogBrief() {
  const [value, setValue] = React.useState('recents')
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const [blogBrief, setBlogBrief] = useState<BlogBriefType[] | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getBlogBrief(
        'https://api.proofolio.site/user/blogBrief',
        {},
        {}
      )
      setBlogBrief(response.response.data)
    }
    fetch()
  }, [])

  return (
    <Container id="BlogBrief" sx={{ mt: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ width: '400px' }}>
          {' '}
          the most {value.toUpperCase()} of my blog :{' '}
        </Typography>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </Box>
      <ImageList
        variant="masonry"
        cols={3}
        gap={15}
        sx={{
          width: '100%',
          height: 300,
          overflowX: 'auto',
          display: 'flex',
        }}
      >
        {(blogBrief || []).map((blog) => (
          <ImageListItem key={blog.blogId}>
            <img
              srcSet={`${blog.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${blog.thumbnail}?w=248&fit=crop&auto=format`}
              alt={blog.blogTitle}
              loading="lazy"
              style={{ width: '250px', borderRadius: '10px' }}
              onClick={() => navigate(`/blog/${blog.blogId}`)}
            />
            <ImageListItemBar
              title={blog.blogTitle}
              subtitle={blog.publishedDate}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${blog.blogTitle}`}
                >
                  <FavoriteBorderIcon /> {blog.heartNum}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}

export default BlogBrief
