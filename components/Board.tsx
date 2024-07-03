import React from 'react'

import Card, { CardProps } from './Card'
import CardLarge from './CardLarge'


interface ComponentToRender {
  class: string;
  component: any;
  props: CardProps | {};
}

const componentsToRender = [
  {
    class: 'w-full ',
    component: Card,
    props: {
      title: "Audience",
      badge: "New",
      value: "1,818",
      percentage: -0.02,
      description: "vs last month",
    }
  },
  {
    class: 'w-full ',
    component: Card,
    props: {
      title: "Visitors",
      value: "1,818",
      percentage: -0.02,
      description: "vs last month",
    }
  },
  {
    class: 'w-full ',
    component: Card,
    props: {
      title: "Total Rate",
      value: "1,818",
      percentage: -0.02,
      description: "vs last month",
    }
  },
  {
    class: 'w-full',
    component: Card,
    props: {
      title: "Conversion",
      value: "1,818",
      percentage: -0.02,
      description: "vs last month",
    }
  },
  {
    class: 'w-full col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4',
    component: CardLarge,
    props: {}
  }
]

function Board() {
  return (
    <div className='w-full overflow-y-scroll'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full'>
        {
          componentsToRender.map((component, index) => (
            <div key={index} className={`${component?.class}`}>
              {
                // @ts-ignore
                React.createElement(component.component, component.props)
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Board