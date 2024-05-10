import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ResumePage from './pages/ResumePage/ResumePage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SingleBlogPage from './pages/BlogPage/SingleBlogPage'
import { DrawerProvider } from './store/DrawerContext'
import { SectionProvider } from './store/SectionContext'

let theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '3rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2.3rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.6rem',
    },
    body1: {
      fontSize: '1.4rem',
    },
    body2: {
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.9rem',
    },
    caption: {
      fontSize: '0.8rem',
    },
  },
})

theme = responsiveFontSizes(theme)

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <SectionProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:blogId" element={<SingleBlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Router>
        </SectionProvider>
      </DrawerProvider>
    </ThemeProvider>
  )
}
