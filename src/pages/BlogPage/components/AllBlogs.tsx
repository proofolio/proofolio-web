import { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import { Container, Typography, Box } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useNavigate } from 'react-router-dom'

import { getBlogBrief } from '../../../api/getAPI'

interface BlogBriefType {
  blogId: number
  publishedDate: string
  blogTopic: string
  blogTitle: string
  thumbnail: string
  heartNum: number
}
function groupByTopic(blogs: Array<BlogBriefType>) {
  return blogs.reduce(
    (groupedBlogs: { [key: string]: Array<BlogBriefType> }, blog) => {
      ;(groupedBlogs[blog.blogTopic] = groupedBlogs[blog.blogTopic] || []).push(
        blog
      )
      return groupedBlogs
    },
    {}
  )
}

function AllBlogs() {
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

  const groupedBlogs = groupByTopic(blogBrief || [])
  const navigate = useNavigate()

  return (
    <Container>
      {Object.entries(groupedBlogs).map(([topic, blogs]) => (
        <Box key={topic} id={topic}>
          <Typography>{topic}</Typography>
          <ImageList cols={4} gap={15}>
            {blogs.map((blog) => (
              <ImageListItem
                key={blog.blogId}
                onClick={() => navigate(`/blog/${blog.blogId}`)}
                sx={{ cursor: 'pointer', width: '250px', height: '250px' }}
              >
                <img
                  srcSet={`${blog.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${blog.thumbnail}?w=248&fit=crop&auto=format`}
                  alt={blog.blogTitle}
                  loading="lazy"
                  style={{ height: '200px', borderRadius: '10px' }}
                />
                <ImageListItemBar
                  title={blog.blogTitle}
                  subtitle={blog.publishedDate}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${blog.blogTitle}`}
                    >
                      <FavoriteBorderIcon />
                      {blog.heartNum}
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ))}
    </Container>
  )
}

export default AllBlogs
