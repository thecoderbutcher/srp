import properties from '@/db/properties_mock_100_clean.json'
import Image from 'next/image'
import { CiMaximize1, CiLocationOn, CiShoppingTag, CiGrid32 } from 'react-icons/ci'
import RecommendedProperties from '../components/RecommendedProperties'
import FavoriteButton from './components/FavoriteButton'
interface pageProps {
  params: { id: string }
}
const Page = async ({ params }: pageProps) => {
  const { id } = await params

  const property = properties.filter((property) => property.id === parseInt(id))[0]

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center justify-center gap-4 py-10">
        <Image src={property.imagen} alt={property.titulo} width={350} height={200} />
        <div className="flex items-start gap-2">
          {/**PROPERTY DETAILS */}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-black">{property.titulo}</h2>
            <div className="flex items-center gap-2">
              <CiShoppingTag />
              <p>{property.tipo}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p>{property.ciudad}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiGrid32 />
              <p>{property.ambientes}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiMaximize1 />
              <p>{property.metros_cuadrados} m2</p>
            </div>
            <p className="text-2xl">${property.precio}</p>
          </div>

          {/**BUTTON TO ADD FAV*/}
          <FavoriteButton property={property}/>
        </div>
      </div>
      {/**RECOMMENDED COMPONENT*/}
      <RecommendedProperties property={property} />
    </div>
  )
}

export default Page
