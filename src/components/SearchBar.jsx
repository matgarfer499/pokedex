import { useState, useEffect } from 'react'
import axios from 'axios'

function SearchBar({ onPokemonSelect }) {
  const [pokemon, setPokemon] = useState('')
  const [filter, setFilter] = useState([])
  const [isListOpen, setIsListOpen] = useState(false)

  useEffect(() => {
    if (pokemon !== '') {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
        .then((response) => {
          const allPokemons = response.data.results
          const filteredPokemons = allPokemons.filter((p) =>
            p.name.includes(pokemon.toLowerCase())
          )
          const slicedPokemons = filteredPokemons.slice(0, 5)
          const promises = slicedPokemons.map((p) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
          )

          Promise.all(promises)
            .then((responses) => {
              const detailedPokemons = responses.map((r) => r.data)
              setFilter(detailedPokemons)
            })
            .catch((error) => {
              console.error('Error fetching data from PokeAPI:', error)
            })
        })
        .catch((error) => {
          console.error('Error fetching data from PokeAPI:', error)
        })
    } else {
      setFilter([])
    }
  }, [pokemon])

  const handlePokemonClick = (selectedPokemon) => {
    setPokemon(selectedPokemon.name)
    setIsListOpen(false)
    onPokemonSelect(selectedPokemon)
  }

  return (
    <div className='w-full relative'>
      <input
        type='text'
        value={pokemon}
        onChange={(e) => {
          setPokemon(e.target.value)
          setIsListOpen(true)
        }}
        className={`w-full h-10 p-2 bg-white border-2 border-black ${
          isListOpen ? 'rounded-t-lg border-b-0' : 'rounded-lg'
        } placeholder:text-sm sm:placeholder:text-normal`}
        placeholder='Insert the name of the Pokemon'
      ></input>
      <div className='absolute z-10 w-full'>
        {isListOpen && (
          <>
            {filter.map((pokemon, index) => (
              <div
                key={pokemon.name}
                className={`flex items-center justify-between cursor-pointer bg-white w-full px-4 border-x-2 border-black hover:bg-gray-200 ${
                  index === filter.length - 1 ? 'border-b-2' : ''
                }`}
                onClick={() => handlePokemonClick(pokemon)}
              >
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className='w-10 sm:w-16 h-10 sm:h-16'
                />
                <span className='text-sm sm:text-lg font-semibold'>
                  {pokemon.name}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default SearchBar
