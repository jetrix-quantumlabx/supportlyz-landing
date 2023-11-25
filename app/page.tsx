/* eslint-disable import/no-default-export */
import { Header } from '@/components/Landing/Layout/Header'
import { ProductDescription } from '@/components/Landing/ProductDescription'
import { BeyondService } from '@/components/Landing/BeyondService'

export default function Home() {
  return (
    <main>
      <Header />
      <ProductDescription />
      <BeyondService />
    </main>
  )
}
