'use client'
import Link from 'next/link'
import { CiBank } from 'react-icons/ci'
import Header from './Header'

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center justify-between px-4 py-10">
        <div className="flex items-center text-3xl gap-2">
          <CiBank /> SRP
        </div>
        <ul className="flex gap-2">
          <Link href={'/'}>Home</Link>
          <Link href={'/properties'}>Propiedades</Link>
          <Link href={'/favorite'}>Favoritas</Link>
        </ul>
      </nav>
      <Header />
    </div>
  )
}

export default Navbar
