import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getDocBySlug(slug: string, folder: 'docs' | 'components') {
  const realSlug = slug?.replace(/\.md$/, '')
  const fullPath = path.join(contentDirectory, folder, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  }
}

export function getAllDocs(folder: 'docs' | 'components') {
  const docsDirectory = path.join(contentDirectory, folder)
  const files = fs.readdirSync(docsDirectory)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '')
      return getDocBySlug(slug, folder)
    })
}

export function getDocSlugs(folder: 'docs' | 'components') {
  const docsDirectory = path.join(contentDirectory, folder)
  const files = fs.readdirSync(docsDirectory)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))
}
