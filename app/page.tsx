/* eslint-disable import/no-default-export */
import { Content } from '@/components/Layout/Content'
import { Header } from '@/components/Layout/Header'
import { Sidebar } from '@/components/Layout/Sidebar'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}

