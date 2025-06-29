'use client'
import { usePropertyStore } from '@/zustand/Properties'
import PropertyList from '../components/PropertyList'

const Page = () => {
  const { favoriteProperties } = usePropertyStore()

  if (favoriteProperties.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <p className='text-2xl text-gray-400'>Aun no tienes propiedades favoritas</p>
      </div>
    )
  }
  return <div>
    <PropertyList properties={favoriteProperties} title='Propiedades Guardadas' />
  </div>
}

export default Page
