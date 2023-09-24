import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/">Self</Link>
      <Link href='/users'>Users</Link>
      <Link href='/users/new'>New User</Link>

      <ProjectCard />
    </main>
  )
}
