import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug:        string
  title:       string
  date:        string
  excerpt:     string
  tags:        string[]
  readingTime: string
  content:     string
}

export type PostMeta = Omit<Post, 'content'>

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug     = filename.replace('.mdx', '')
      const raw      = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
      const { data } = matter(raw)
      const rt       = readingTime(raw)

      return {
        slug,
        title:       data.title   || slug,
        date:        data.date    ? String(data.date) : '',
        excerpt:     data.excerpt || '',
        tags:        data.tags    || [],
        readingTime: rt.text,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null

  const raw            = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  const rt             = readingTime(raw)

  return {
    slug,
    title:       data.title   || slug,
    date:        data.date    ? String(data.date) : '',
    excerpt:     data.excerpt || '',
    tags:        data.tags    || [],
    readingTime: rt.text,
    content,
  }
}
