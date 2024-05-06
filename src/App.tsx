import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ResumePage from './pages/ResumePage/ResumePage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SingleBlogPage from './pages/BlogPage/SingleBlogPage'
import { DrawerProvider } from './store/DrawerContext'
import { SectionProvider } from './store/SectionContext'

export default function App() {
  return (
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
  )
}
