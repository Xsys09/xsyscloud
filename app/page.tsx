import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import BlogPreview from '@/components/BlogPreview'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogPreview posts={posts} />
    </>
  )
}
