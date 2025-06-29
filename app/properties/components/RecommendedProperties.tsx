import PropertyList from '@/app/components/PropertyList'
import properties from '@/db/properties_mock_100_clean.json'
import { Property } from '../lib/type'

const RecommendedProperties = ({ property }: { property: Property }) => {
  const recomendacionPorCiudad = properties
    .filter(
      (propertyFilter) =>
        propertyFilter.ciudad === property.ciudad && propertyFilter.id !== property.id
    )
    .slice(0, 3)
  const recomendacionPorTipo = properties
    .filter(
      (propertyFilter) => propertyFilter.tipo === property.tipo && propertyFilter.id !== property.id
    )
    .slice(0, 3)

  const recomendacionPorPrecio = properties
    .filter(
      (propertyFilter) =>
        propertyFilter.precio >= property.precio - property.precio * 0.2 &&
        propertyFilter.precio <= property.precio + property.precio * 0.2 &&
        propertyFilter.id !== property.id
    )
    .slice(0, 3)
  return (
    <div className="flex flex-col py-4 gap-4">
      <h2 className="text-xl bg-accent/20 mx-auto px-2 py-1 rounded-lg">Propiedades Recomendadas</h2>
      <PropertyList properties={recomendacionPorCiudad} title="En la misma ciudad" />
      <PropertyList properties={recomendacionPorTipo} title="Tipo de propiedad" />
      <PropertyList properties={recomendacionPorPrecio} title="Rango de precio" />
    </div>
  )
}

export default RecommendedProperties
