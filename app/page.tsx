'use client'
import propiedades from '@/db/properties_mock_100_clean.json'
import PropertyHome from './components/PropertyList'
import { usePropertyStore } from '@/zustand/Properties'
import { useEffect } from 'react'

export default function Home() {
  const { setProperties, propertiesFiltered } = usePropertyStore()

  useEffect(() => {
    setProperties(propiedades)
  }, [setProperties])

  const propertiesFilter = propertiesFiltered()

  const casas = propertiesFilter.filter((casa) => casa.tipo === 'Casa').slice(0, 3)
  const departamentos = propertiesFilter
    .filter((departamento) => departamento.tipo === 'Departamento')
    .slice(0, 3)
  const unAmbiente = propertiesFilter.filter((unAmbiente) => unAmbiente.ambientes === 1).slice(0, 3)

  if (propertiesFilter.length < 100) {
    return (
      <div>
        <PropertyHome properties={propertiesFilter} title="Propiedades Encontradas" />
      </div>
    )
  }
  return (
    <main className="flex flex-col justify-center items-center">
      <PropertyHome properties={casas} title="Casas" />
      <PropertyHome properties={departamentos} title="Departamentos" />
      <PropertyHome properties={unAmbiente} title="Propiedades de 1 Ambiente" />
    </main>
  )
}
