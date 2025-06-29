import { Property } from '@/app/properties/lib/type'
import { create } from 'zustand'

type PropertyState = {
  properties: Property[]
  setProperties: (properties: Property[]) => void

  favoriteProperties: Property[]
  setFavoriteProperties: (properties: Property[]) => void
  addFavorite: (property: Property) => void
  removeFavorite: (id: number) => void
  isFavorite: (id: number) => boolean

  filterText: string
  setFilterText: (filterText: string) => void

  propertiesFiltered(): Property[]
}

export const usePropertyStore = create<PropertyState>((set, get) => ({
  properties: [],
  setProperties: (properties) => set({ properties }),

  favoriteProperties: [],
  setFavoriteProperties: (properties) => set({ favoriteProperties: properties }),

  addFavorite: (property) => {
    const { favoriteProperties } = get()
    const exists = favoriteProperties.find(p => p.id === property.id)
    if (!exists) {
      set({ favoriteProperties: [...favoriteProperties, property] })
    }
  },

  removeFavorite: (id) => {
    const { favoriteProperties } = get()
    set({ favoriteProperties: favoriteProperties.filter(p => p.id !== id) })
  },

  isFavorite: (id) => {
    const { favoriteProperties } = get()
    return favoriteProperties.some(p => p.id === id)
  },

  filterText: '',
  setFilterText: (filterText) => set({ filterText }),

  propertiesFiltered() {
    const { properties, filterText } = get()

    const filtered = properties.filter(property => (property.titulo.toLowerCase().includes(filterText.toLowerCase())))

    return filtered
  }

}))
