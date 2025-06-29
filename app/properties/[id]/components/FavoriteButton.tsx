'use client'
import { usePropertyStore } from '@/zustand/Properties'
import { CiStar } from 'react-icons/ci'
import { Property } from '@/app/properties/lib/type'

const FavoriteButton = ({ property }: { property: Property }) => {
  const { isFavorite, removeFavorite, addFavorite } = usePropertyStore()

  const handleFavorite = () => {
    if (isFavorite(property.id)) {
      removeFavorite(property.id)
    } else {
      addFavorite(property)
    }
  }

  return (
    <CiStar
      onClick={handleFavorite}
      className={`text-4xl cursor-pointer ${isFavorite(property.id) ? 'text-accent' : ''}`}
    />
  )
}

export default FavoriteButton
