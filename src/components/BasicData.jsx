function BasicData({ name, id, weight, height }) {
  return (
    <>
      <li className='text-center text-sm sm:text-xl font-semibold uppercase'>
        {name} #{id}
      </li>
      <li className='text-xs sm:text-normal mt-1'>
        <b>Weight:</b> {(weight * 0.1).toFixed(2)}kg
      </li>
      <li className='text-xs sm:text-normal mt-1'>
        <b>Height:</b> {(height * 0.1).toFixed(2)}m
      </li>
    </>
  )
}

export default BasicData
