import PropertyCard from '../properties/components/PropertyCard'
import { Property } from '../properties/lib/type'

interface PropertyHomeProps {
  title: string
  properties: Property[]
}
const PropertyList = ({ title, properties }: PropertyHomeProps) => {
  return (
    <div className="flex flex-col gap-4 py-8">
      <h2 className="text-4xl font-black">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-2 justify-items-stretch">
        {properties.map(({ id, titulo, imagen, ciudad, ambientes, metros_cuadrados, precio }) => (
          <PropertyCard
            key={id}
            id={id}
            titulo={titulo}
            imagen={imagen}
            ciudad={ciudad}
            ambientes={ambientes}
            tipo=""
            metros_cuadrados={metros_cuadrados}
            precio={precio}
          />
        ))}
      </div>
    </div>
  )
}

export default PropertyList
