function PokedexDecorationLeft() {
  return (
    <>
      <div className='absolute flex justify-center items-center gap-4 bottom-60 sm:bottom-52 mb-2 md:bottom-28 left-10 sm:left-16 md:left-28 lg:left-40'>
        <div className='w-10 sm:w-16 h-3 sm:h-4 border-2 border-black rounded-full bg-[#c32929]'></div>
        <div className='w-10 sm:w-16 h-3 sm:h-4 border-2 border-black rounded-full bg-[#5054a0]'></div>
      </div>
      <div className='absolute w-10 sm:w-14 h-10 sm:h-14 rounded-full border-4 border-[#cd2e2f] bottom-48 sm:bottom-20 left-2 sm:left-6 md:left-10 lg:left-20 flex items-center justify-center'>
        <div className='bg-[#2a2a2a] rounded-full w-6 sm:w-10 h-6 sm:h-10'></div>
      </div>
      <div className='absolute w-[37%] sm:w-32 h-24 rounded-xl border-2 border-black bg-[#516349] bottom-2 left-4 sm:left-14 md:left-44 ml-2'></div>
      <div className='absolute bottom-36 sm:bottom-34 md:bottom-12 left-10 sm:left-28 md:left-[350px]'>
        <div className='w-24 h-8 bg-[#152026] relative'>
          <div className='absolute shadow-inner shadow-black w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-l-[#344147] border-transparent right-1 top-[6px]'></div>
          <div className='absolute shadow-inner shadow-black w-0 h-0 border-t-[10px] border-b-[10px] border-r-[20px] border-r-[#344147] border-transparent left-1 top-[6px]'></div>
        </div>
        <div className='absolute w-8 h-24 bg-[#152026] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='absolute w-0 h-0 shadow-inner shadow-black border-r-[10px] border-b-[20px] border-l-[10px] border-b-[#344147] border-transparent right-[6px] top-1'></div>
          <div className='absolute w-0 h-0 shadow-inner shadow-black border-r-[10px] border-t-[20px] border-l-[10px] border-t-[#344147] border-transparent right-[6px] bottom-1'></div>
        </div>
        <div className='absolute w-8 h-8 bg-[#081319] shadow-inner shadow-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
      </div>
      <div className='bg-[#292929] absolute right-0 w-[47%] h-[80px] sm:h-[65px]'></div>
      <div className='absolute right-0 sm:top-7 w-[30%] sm:w-[20%] border-l-[60px] border-t-[100px] border-transparent border-t-[#292929]'></div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-y-0 rounded-t-[10%] rounded-b-[10%] bg-[#dc3a35] border-[#cd2e2f] h-[100%] w-1/12'>
        <div className='bg-transparent w-full scale-[1.3] h-10 border-4 border-transparent border-t-[#cd2e2f] rounded-t-[100%] absolute top-14'></div>
        <div className='bg-transparent w-full scale-[1.3] h-10 border-4 border-transparent border-t-[#cd2e2f] rounded-t-[100%] absolute top-20'></div>
        <div className='bg-transparent w-full scale-[1.3] h-10 border-4 border-transparent border-t-[#cd2e2f] rounded-t-[100%] absolute bottom-14'></div>
        <div className='bg-transparent w-full scale-[1.3] h-10 border-4 border-transparent border-t-[#cd2e2f] rounded-t-[100%] absolute bottom-20'></div>
      </div>
    </>
  )
}

export default PokedexDecorationLeft
