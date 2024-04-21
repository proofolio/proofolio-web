import { Typography, Box, Container } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const DUMMY_BLOGS = [
  {
    blogId: 0,
    publishedDate: '2023.Dec.13',
    blogTopic: 'Topic A',
    blogTitle: 'BlogTitle 1',
    thumbnail: 'https://fakeimg.pl/300/',
    heartNum: '2',
    blogIntro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
    blogDetail: [
      {
        subTitle: 'subTitle 1',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 2',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 3',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
    ],
    comment: [
      {
        commentId: 1,
        createdDate: '2023.Dec.23',
        commentMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus',
      },
    ],
  },
  {
    blogId: 1,
    publishedDate: '2024.Jan.13',
    blogTopic: 'Topic A',
    blogTitle: 'BlogTitle 2',
    thumbnail: 'https://fakeimg.pl/300/',
    heartNum: '5',
    blogIntro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
    blogDetail: [
      {
        subTitle: 'subTitle 1',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 2',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 3',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
    ],
  },
  {
    blogId: 2,
    publishedDate: '2023.Jan.24',
    blogTopic: 'Topic A',
    blogTitle: 'BlogTitle 3',
    thumbnail: 'https://fakeimg.pl/300/',
    heartNum: '9',
    blogIntro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
    blogDetail: [
      {
        subTitle: 'subTitle 1',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 2',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 3',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
    ],
    comment: [
      {
        commentId: 2,
        createdDate: '2024.Feb.3',
        commentMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus',
      },
      {
        commentId: 3,
        createdDate: '2024.Feb.13',
        commentMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus',
      },
    ],
  },
  {
    blogId: 3,
    publishedDate: '2023.Feb.13',
    blogTopic: 'Topic A',
    blogTitle: 'BlogTitle 3',
    thumbnail: 'https://fakeimg.pl/300/',
    heartNum: '1',
    blogIntro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
    blogDetail: [
      {
        subTitle: 'subTitle 1',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 2',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
      {
        subTitle: 'subTitle 3',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus, totam sint perspiciatis veritatis tenetur. Commodi facere possimus quibusdam accusamus.',
        image: 'https://picsum.photos/id/1/200/300',
      },
    ],
    comment: {
      commentId: 4,
      createdDate: '2023.March.23',
      commentMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio impedit incidunt tempora assumenda ipsa aut hic similique nulla necessitatibus',
    },
  },
]

interface BlogProps {
  blogId: number
}

const SingleBlog: React.FC<BlogProps> = ({ blogId }) => {
  const selectedBlog = DUMMY_BLOGS.find((blog) => blog.blogId === blogId)

  if (!selectedBlog) {
    return <div>No Blog found</div>
  }

  return (
    <Container sx={{ zIndex: '10' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2">{selectedBlog.blogTitle}</Typography>
        <FavoriteBorderIcon />
        {selectedBlog.heartNum}
      </Box>
      <img alt={selectedBlog.blogTitle} src={selectedBlog.thumbnail}></img>
      <Typography>{selectedBlog.publishedDate}</Typography>
      <Typography variant="body1">{selectedBlog.blogIntro}</Typography>
      {selectedBlog.blogDetail.map((p) => (
        <Box>
          <Typography variant="h6">{p.subTitle}</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography>{p.paragraph}</Typography>
            <img alt={p.subTitle} src={p.image}></img>
          </Box>
        </Box>
      ))}
    </Container>
  )
}
export default SingleBlog
