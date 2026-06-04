import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  )
}
