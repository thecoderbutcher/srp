'use client'
import Link from 'next/link'
import PropertyCard from '../properties/components/PropertyCard'
import propiedadesDB from '@/db/properties_mock_100_clean.json'
import { useSearchParams } from 'next/navigation'
import { usePropertyStore } from '@/zustand/Properties'
import { useEffect } from 'react'

const Page = () => {
  const { propertiesFiltered, setProperties } = usePropertyStore()
  const propertiesFilter = propertiesFiltered()

  useEffect(() => {
    setProperties(propiedadesDB)
  }, [setProperties])

  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const page = pageParam !== null ? parseInt(pageParam) : 1

  const casaPorPagina = 9
  const totalPropiedades = propertiesFilter.length
  const totalPagina = Math.ceil(totalPropiedades / casaPorPagina)
  console.log(totalPagina)

  const inicio = (page - 1) * casaPorPagina
  const fin = inicio + casaPorPagina

  const propiedades = propertiesFilter.slice(inicio, fin)

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-2 justify-items-stretch">
        {propiedades.map(({ id, titulo, imagen, ciudad, ambientes, metros_cuadrados, precio }) => (
          <div key={id}>
            <PropertyCard
              id={id}
              titulo={titulo}
              imagen={imagen}
              ciudad={ciudad}
              ambientes={ambientes}
              tipo=""
              metros_cuadrados={metros_cuadrados}
              precio={precio}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 py-4">
        {Array.from({ length: totalPagina }, (_, i) => (
          <Link
            key={i}
            href={`/properties?page=${i + 1}`}
            className={`${
              i + 1 === page ? 'bg-accent' : ''
            } px-2 border border-gray-400 rounded-lg hover:scale-110 transition-all duration-200`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
