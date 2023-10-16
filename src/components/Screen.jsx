function Screen ({image, loading}) {
    return (
      <div className='absolute w-2/5 sm:w-2/5 h-2/6 sm:h-3/6 bg-white top-[110px] sm:top-1/5 md:top-1/4 left-2 sm:left-4 rounded-xl shadow-inner shadow-black'>
        <img
          src={image}
          className='absolute object-fit h-4/6 w-10/12 bg-[#125778] top-8 left-1/2 transform -translate-x-1/2 rounded-lg'
        ></img>
        <div
          className={`absolute object-fit h-4/6 w-10/12 bg-black top-8 left-1/2 transform -translate-x-1/2 rounded-lg transition-opacity ${
            loading ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <div className='absolute flex justify-center items-center gap-4 top-3 sm:top-1 left-1/2 transform -translate-x-1/2 '>
          <div className='bg-[#dc3a35] w-2 sm:w-4 h-2 sm:h-4 rounded-full border-2 border-black'></div>
          <div className='bg-[#dc3a35] w-2 sm:w-4 h-2 sm:h-4 rounded-full border-2 border-black'></div>
        </div>
        <div className='absolute flex justify-between items-center w-9/12 bottom-2 sm:bottom-6 left-6 sm:left-12'>
          <div className='bg-[#dc3a35] w-4 sm:w-8 h-4 sm:h-8 rounded-full border-2 border-black'></div>
          <div className='flex flex-col gap-1 sm:gap-2 justify-center items-center'>
            <div className='w-5 sm:w-10 h-1 bg-black rounded-full'></div>
            <div className='w-5 sm:w-10 h-1 bg-black rounded-full'></div>
            <div className='w-5 sm:w-10 h-1 bg-black rounded-full'></div>
          </div>
        </div>
        <div className='w-0 h-0 border-t-[30px] sm:border-t-[60px] border-l-[30px] sm:border-l-[60px] border-transparent border-l-[#dc3a35] absolute -bottom-1 -left-1'></div>
      </div>
    )
}

export default Screen