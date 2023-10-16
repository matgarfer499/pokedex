import BasicData from './BasicData'
import PokemonType from './PokemonType'

function PokemonData({ data }) {
  return (
    <ul className='w-full text-white p-2'>
      <BasicData
        name={data.name}
        id={data.id}
        weight={data.weight}
        height={data.height}
      ></BasicData>
      <PokemonType
        typesData={data.types}
      ></PokemonType>
    </ul>
  )
}

export default PokemonData
