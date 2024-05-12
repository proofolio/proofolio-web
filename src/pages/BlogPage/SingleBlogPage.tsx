import { useContext } from 'react'
import { Box, CssBaseline } from '@mui/material'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SideDrawer from '../../components/Drawer'
import SingleBlog from './components/SingleBlog'
import { SectionContext } from '../../store/SectionContext'

const SECTIONS = [
  {
    sectionTitle: 'TypeScript',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={1} />,
    blogId: 1,
  },
  {
    sectionTitle: 'JS Basics - data types',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={2} />,
    blogId: 2,
  },
  {
    sectionTitle: 'JS Basics - Promise',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={3} />,
    blogId: 3,
  },
  {
    sectionTitle: 'JWT',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={4} />,
    blogId: 4,
  },
  {
    sectionTitle: 'OAuth',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={5} />,
    blogId: 5,
  },
  {
    sectionTitle: 'Vite',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={6} />,
    blogId: 6,
  },
  {
    sectionTitle: 'React Hooks',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={7} />,
    blogId: 7,
  },
]

function SingleBlogPage() {
  const { blogId } = useParams()
  const blogIdNumber = Number(blogId)

  const sectionContext = useContext(SectionContext)
  if (!sectionContext) {
    throw new Error('Component must be wrapped with <SectionContext.Provider>')
  }
  const { whichSection } = sectionContext

  const sectionIndex = SECTIONS.findIndex(
    (section) => section.sectionTitle === whichSection
  )

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minHeight: '96vh',
        }}
      >
        <CssBaseline />
        <Header />
        <SideDrawer sections={SECTIONS} sectionLabel="Blogs" />
        <Box component={'main'} sx={{ flexGrow: 1, p: 3, marginTop: '60px' }}>
          {sectionIndex === -1 ? (
            <SingleBlog blogId={blogIdNumber} />
          ) : (
            SECTIONS[sectionIndex].sectionComponent
          )}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default SingleBlogPage
