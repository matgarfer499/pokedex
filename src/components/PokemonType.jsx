import Type from './Type'
function PokemonType({ typesData }) {
  return (
    <>
      <li className='flex justify-center items-center gap-2 mt-1 font-bold'>
        <Type type={typesData[0].type.name}></Type>
        {typesData[1] && <Type type={typesData[1].type.name}></Type>}
      </li>
    </>
  )
}

export default PokemonType
