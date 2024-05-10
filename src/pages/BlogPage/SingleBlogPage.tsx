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
    sectionTitle: 'BlogTitle1',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={0} />,
    blogId: 0,
  },
  {
    sectionTitle: 'BlogTitle2',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={1} />,
    blogId: 1,
  },
  {
    sectionTitle: 'BlogTitle3',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={2} />,
    blogId: 2,
  },
  {
    sectionTitle: 'BlogTitle4',
    sectionIcon: '❄️',
    sectionComponent: <SingleBlog blogId={3} />,
    blogId: 3,
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
