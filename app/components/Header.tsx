import { usePropertyStore } from '@/zustand/Properties'
import { CiSearch } from 'react-icons/ci'

const Header = () => {
  const { setFilterText } = usePropertyStore()
  return (
    <div className="flex items-center justify-between py-3 w-full">
      <h1></h1>
      <div className="flex items-center border px-4 py-2 rounded-md">
        <input
          type="text"
          placeholder="Buscar propiedades"
          className=" outline-none"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <CiSearch />
      </div>
    </div>
  )
}

export default Header
