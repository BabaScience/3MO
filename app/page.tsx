import React from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Card from '../components/Card'
import CardLarge from '../components/CardLarge';
import StatCard from '../components/StatCard';
import Board from '../components/Board';


const CardInfo = {
  title: "Audience",
  badge: "New",
  value: "1,818",
  percentage: -0.02,
  description: "vs last month",
};


function Page() {
  return (
    <div data-theme='light'>
      <div className='flex'>
        <Menu />
        <div className="w-full h-full">
          <Header title="Demographic Report"/>
          <div className='w-full flex justify-center items-center'>
            <div className=' bg-white w-11/12 h-11/12 mt-8 mb-8'>
              <Board />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page