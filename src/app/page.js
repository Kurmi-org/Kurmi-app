import Image from 'next/image'
import Products from '@/components/Products'
import { AuthContext } from '@/context/AuhtContex'

export default function Home() {
  return (
    <div>
      <Products />
    </div>
  )
}