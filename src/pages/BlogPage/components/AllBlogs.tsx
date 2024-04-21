import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import { Container, Typography, Box } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const DUMMY_BLOGS = [
  {
    blogId: 0,
    publishedDate: 'string',
    blogTopic: 'Topic A',
    blogTitle: 'Title 1',
    thumbnail: 'https://picsum.photos/id/10/200/300',
    heartNum: 0,
    blogIntro: 'string',
  },
  {
    blogId: 1,
    publishedDate: 'string',
    blogTopic: 'Topic A',
    blogTitle: 'Title 2',
    thumbnail: 'https://picsum.photos/id/11/200/300',
    heartNum: 3,
    blogIntro: 'string',
  },
  {
    blogId: 2,
    publishedDate: 'string',
    blogTopic: 'Topic B',
    blogTitle: 'Title 3',
    thumbnail: 'https://picsum.photos/id/9/200/300',
    heartNum: 4,
    blogIntro: 'string',
  },
  {
    blogId: 3,
    publishedDate: 'string',
    blogTopic: 'Topic C',
    blogTitle: 'Title 4 ',
    thumbnail: 'https://picsum.photos/id/13/200/300',
    heartNum: 1,
    blogIntro: 'string',
  },
  {
    blogId: 4,
    publishedDate: 'string',
    blogTopic: 'Topic D',
    blogTitle: 'Title 3',
    thumbnail: 'https://picsum.photos/id/19/200/300',
    heartNum: 2,
    blogIntro: 'string',
  },
]
interface BlogProps {
  blogId: number
  publishedDate: string
  blogTopic: string
  blogTitle: string
  thumbnail: string
  heartNum: number
  blogIntro: string
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

  return (
    <Container>
      {Object.entries(groupedBlogs).map(([topic, blogs]) => (
        <Box key={topic} id={topic}>
          <Typography>{topic}</Typography>
          <ImageList cols={4} gap={15}>
            {blogs.map((blog) => (
              <ImageListItem key={blog.blogId}>
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
