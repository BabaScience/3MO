import React from 'react'

const countryStats = [
  {
    country: 'USA',
    percentage: 40,
    image: 'https://flagsapi.com/US/flat/64.png',
  },
  {
    country: 'Germany',
    percentage: 30,
    image: 'https://flagsapi.com/DE/flat/64.png',
  },
  {
    country: 'UK',
    percentage: 20,
    image: 'https://flagsapi.com/GB/flat/64.png',
  },
  {
    country: 'Canada',
    percentage: 10,
    image: 'https://flagsapi.com/CA/flat/64.png',
  },
]

function CardLarge() {
  return (
      <div className="card bg-base-100 border">
        {/* Header */}
        <div className='border h-[50px] flex items-center'>
          <h1
            className=' pl-3 text-gray-800 card-title'
          >
            Target Demographic Audience
          </h1>
        </div>  
        {/* Card Content */}
        <div className='card sm:card-side'>
          {/* Left */}
          <div className='w-full sm:w-3/5 h-[300px] sm:h-[500px] bg-slate-300 flex items-center justify-center'>
            <h1>map</h1>
          </div>
          {/* Right */}
          <div className="card-body">
            <h2 className="text-3xl font-bold">98,2K</h2>
            <span className="mb-5">Global customers widely</span>
            <ul className='m-0'>
              {
                countryStats.map((country, index) => (
                  <li key={index} className='flex items-center mb-3 w-full'>
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-red-50 mr-3">
                      <img src={country.image} alt={country.country} className="h-10 w-auto" />
                    </div>
                    <div className='w-full'>
                      <div className='flex justify-between w-full'>
                        <span className='text-md m-0 p-0'>{country.country}</span>
                        <span className='text-gray-500'>{country.percentage}%</span>
                      </div>
                      <progress className="progress progress-info w-full flex-1 " value={country.percentage} max="100"></progress>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
  )
}

export default CardLarge