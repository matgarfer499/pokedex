function Type({type}) {
  return (
    <>
      {(() => {
        switch (type) {
          case 'fire':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#d32b04] rounded-full border-2 border-white text-stroke'>
                FIRE
              </span>
            )
          case 'water':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#2c8ae9] rounded-full border-2 border-white text-stroke'>
                WATER
              </span>
            )
          case 'bug':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#a8b71e] rounded-full border-2 border-white text-stroke'>
                BUG
              </span>
            )
          case 'dark':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#493b30] rounded-full border-2 border-white text-stroke'>
                DARK
              </span>
            )
          case 'dragon':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#6f5cd0] rounded-full border-2 border-white text-stroke'>
                DRAGON
              </span>
            )
          case 'electric':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#f8b216] rounded-full border-2 border-white text-stroke'>
                ELECTRIC
              </span>
            )
          case 'fairy':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#f2b0f3] rounded-full border-2 border-white text-stroke'>
                FAIRY
              </span>
            )
          case 'fighting':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#7e341a] rounded-full border-2 border-white text-stroke'>
                FIGHTING
              </span>
            )
          case 'ghost':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#5c5fad] rounded-full border-2 border-white text-stroke'>
                GHOST
              </span>
            )
          case 'grass':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#6dae3c] rounded-full border-2 border-white text-stroke'>
                GRASS
              </span>
            )
          case 'ground':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#d6ba70] rounded-full border-2 border-white text-stroke'>
                GROUND
              </span>
            )
          case 'ice':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#8ee1fa] rounded-full border-2 border-white text-stroke'>
                ICE
              </span>
            )
          case 'normal':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#736e6c] rounded-full border-2 border-white text-stroke'>
                NORMAL
              </span>
            )
          case 'poison':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#6a3469] rounded-full border-2 border-white text-stroke'>
                POISON
              </span>
            )
          case 'psychic':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#eb4680] rounded-full border-2 border-white text-stroke'>
                PSYCHIC
              </span>
            )
          case 'rock':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#a89143] rounded-full border-2 border-white text-stroke'>
                ROCK
              </span>
            )
          case 'steel':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#9090a0] rounded-full border-2 border-white text-stroke'>
                STEEL
              </span>
            )
          case 'flying':
            return (
              <span className='text-xs sm:text-normal px-1 sm:px-4 py-1 bg-[#5f72c8] rounded-full border-2 border-white text-stroke'>
                FLYING
              </span>
            )
          default:
            return <span>Other</span>
        }
      })()}
    </>
  )
}

export default Type
