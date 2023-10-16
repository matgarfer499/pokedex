import { useState, useEffect } from 'react'
import myImage from './assets/pokemon.png'
import PokemonData from './components/PokemonData'
import PokedexDecorationRight from './components/PokedexDecorationRight'
import PokedexDecorationLeft from './components/PokedexDercorationLeft'
import Screen from './components/Screen'
import SearchBar from './components/SearchBar'

function App() {
  const [image, setImage] = useState(myImage)
  const [pokemonData, setPokemonData] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 1500) 
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handlePokemonSelect = (selectedPokemon) => {
    setIsVisible(true)
    setPokemonData(selectedPokemon)
    setImage(selectedPokemon.sprites.front_default)
  }

  return (
    <div className='w-screen h-screen flex flex-col gap-2 items-center justify-center'>
      <h4 className='text-yellow-400 w-5/6 text-center sm:text-xl font-semibold'>
        Welcome to the Pokedex! Search for your favourite Pokemon
      </h4>
      <div className='flex justify-center items-center gap-4 w-5/6 sm:w-1/2 relative'>
        <SearchBar onPokemonSelect={handlePokemonSelect} />
      </div>
      <div className='w-full sm:w-9/12 h-5/6 bg-[#dc3a35] rounded-3xl relative'>
        <div className='absolute rounded-full border-2 shadow-3xl border-black bg-white w-14 sm:w-20 h-14 sm:h-20 top-6 left-6'>
          <div className='absolute border-2 border-black rounded-full bg-gradient-to-t from-[#4f2253] to-[#03576b] w-10 sm:w-16 h-10 sm:h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='absolute w-2 sm:w-[20px] h-4 sm:h-[30px] bg-white rounded-egg top-2 left-2 sm:left-3 rotate-[30deg]'></div>
          </div>
        </div>
        <div className='absolute flex justify-center items-center gap-4 top-4 left-20 sm:left-28'>
          <div className='relative w-4 sm:w-6  h-4 sm:h-6 border-2 border-black rounded-full bg-gradient-to-t from-[#cd3642] to-[#691b22]'>
            <div className='absolute w-[2px] h-[5px] bg-white rounded-egg top-[2px] sm:top-[3px] left-1 rotate-[40deg]'></div>
          </div>
          <div className='relative w-4 sm:w-6  h-4 sm:h-6 border-2 border-black rounded-full bg-gradient-to-t from-[#499e57] to-[#e7eb00]'>
            <div className='absolute w-[2px] h-[5px] bg-white rounded-egg top-[2px] sm:top-[3px] left-1 rotate-[40deg]'></div>
          </div>
          <div className='relative w-4 sm:w-6  h-4 sm:h-6 border-2 border-black rounded-full bg-gradient-to-t from-[#499e57] to-[#184425]'>
            <div className='absolute w-[2px] h-[5px] bg-white rounded-egg top-[2px] sm:top-[3px] left-1 rotate-[40deg]'></div>
          </div>
        </div>
        <Screen image={image} loading={isVisible} />
        <PokedexDecorationLeft />
        <div className='absolute w-2/5 h-1/5 sm:h-1/4 bg-[#2a2a2a] top-28 sm:top-44 right-3 sm:right-8 rounded-xl border-2 border-black'>
          {pokemonData && <PokemonData data={pokemonData}></PokemonData>}
        </div>
        <div
          className={`absolute w-2/5 h-1/5 sm:h-1/4 bg-[#000000] top-28 sm:top-44 right-3 sm:right-8 rounded-xl border-2 border-black transition-opacity ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <PokedexDecorationRight />
      </div>
    </div>
  )
}

export default App
