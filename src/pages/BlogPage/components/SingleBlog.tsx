import { useState, useEffect } from 'react'
import { Typography, Box, Container, Button, Divider } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { getBlogs } from '../../../api/getAPI'

interface BlogsType {
  blogId: number
  publishedDate: string
  blogTopic: string
  blogTitle: string
  heartNum: number
  thumbnail: string
  blogIntro: string
}

interface BlogType {
  blogId: number
}

const SingleBlog: React.FC<BlogType> = ({ blogId }) => {
  const [blogs, setBlogs] = useState<BlogsType[] | null>(null)

  useEffect(() => {
    async function fetch() {
      const response = await getBlogs(
        'https://api.proofolio.site/user/blogs',
        {},
        {}
      )
      setBlogs(response.response.data)
    }
    fetch()
  }, [])

  const navigate = useNavigate()
  const selectedBlog = blogs && blogs.find((blog) => blog.blogId === blogId)
  if (!selectedBlog) {
    return <div>No Blog found</div>
  }

  return (
    <Container>
      <Box>
        <Button
          sx={{ display: 'flex', ml: -2 }}
          onClick={() => navigate(`/blog`)}
        >
          <ArrowBackIcon />
          <Typography>back to Blogs</Typography>
        </Button>
        <Box sx={{ display: 'flex', my: 1 }}>
          <Typography variant="h3">{selectedBlog.blogTitle}</Typography>
          <Button>
            <FavoriteBorderIcon />
            {selectedBlog.heartNum}
          </Button>
        </Box>
      </Box>
      {/* <img alt={selectedBlog.blogTitle} src={selectedBlog.thumbnail}></img> */}
      <Typography variant="subtitle1">{selectedBlog.publishedDate}</Typography>
      <Divider sx={{ my: 2 }} />
      <ReactMarkdown>{selectedBlog.blogIntro}</ReactMarkdown>
    </Container>
  )
}
export default SingleBlog
