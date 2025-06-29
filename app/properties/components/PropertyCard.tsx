import Image from 'next/image'
import Link from 'next/link'
import { Property } from '../lib/type'
import { CiGrid42, CiLocationOn, CiMaximize1 } from 'react-icons/ci'

const PropertyCard = ({
  id,
  titulo,
  imagen,
  ciudad,
  metros_cuadrados,
  ambientes,
  precio
}: Property) => {
  return (
    <div className="flex flex-col gap-2 w-[350px] p-2 rounded-lg hover:bg-accent/10 hover:shadow hover:scale-105 transition-all duration-300">
      <Image src={imagen} alt={titulo} width={350} height={200} className="rounded-xl" />
      <p className="text-xl font-semibold">{titulo}</p>
      <div className="flex gap-2 font-extralight text-gray-500">
        <div className="flex items-center gap-1">
          <CiLocationOn />
          <p>{ciudad}</p>
        </div>
        <div className="flex gap-1 items-center">
          <CiMaximize1 />
          <p>{metros_cuadrados} m2</p>
        </div>
        <div className="flex items-center gap-1">
          <CiGrid42 />
          <p>{ambientes}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl">${precio}</p>
        <Link href={`/properties/${id}`} className="bg-accent px-2 py-1 rounded-md shadow">
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard
