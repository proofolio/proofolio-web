import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import { Container, Typography, Box } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useNavigate } from 'react-router-dom'

import data from '../../../api/DummyFiles.json'

const DUMMY_BLOGS = data.DUMMY_BLOG_BRIEF
interface BlogProps {
  blogId: number
  publishedDate: string
  blogTopic: string
  blogTitle: string
  thumbnail: string
  heartNum: number
}
function groupByTopic(blogs: Array<BlogProps>) {
  return blogs.reduce(
    (groupedBlogs: { [key: string]: Array<BlogProps> }, blog) => {
      ;(groupedBlogs[blog.blogTopic] = groupedBlogs[blog.blogTopic] || []).push(
        blog
      )
      return groupedBlogs
    },
    {}
  )
}

function AllBlogs() {
  const groupedBlogs = groupByTopic(DUMMY_BLOGS)
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
              >
                <img
                  srcSet={`${blog.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${blog.thumbnail}?w=248&fit=crop&auto=format`}
                  alt={blog.blogTitle}
                  loading="lazy"
                  style={{ height: '200px' }}
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
