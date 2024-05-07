import { Typography, Box, Container, Button, Divider } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import data from '../../../api/DummyFiles.json'

const DUMMY_BLOGS = data.DUMMY_BLOGS_ALL

interface BlogProps {
  blogId: number
}

const SingleBlog: React.FC<BlogProps> = ({ blogId }) => {
  const navigate = useNavigate()
  const selectedBlog = DUMMY_BLOGS.find((blog) => blog.blogId === blogId)
  if (!selectedBlog) {
    return <div>No Blog found</div>
  }

  return (
    <Container>
      <Box>
        <Button sx={{ display: 'flex' }} onClick={() => navigate(`/blog`)}>
          <ArrowBackIcon />
          <Typography>back to Blogs</Typography>
        </Button>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h2">{selectedBlog.blogTitle}</Typography>
          <Button>
            <FavoriteBorderIcon />
            {selectedBlog.heartNum}
          </Button>
        </Box>
      </Box>
      <img alt={selectedBlog.blogTitle} src={selectedBlog.thumbnail}></img>
      <Typography>{selectedBlog.publishedDate}</Typography>
      <ReactMarkdown>{selectedBlog.blogIntro}</ReactMarkdown>
    </Container>
  )
}
export default SingleBlog
