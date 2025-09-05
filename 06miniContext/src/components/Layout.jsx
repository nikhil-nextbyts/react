import React from 'react'
import Card from './Card'

function Layout() {
  return (
    <div>
      <div>left</div>
      <div>
        <div className='bg-yellow-400'>
            <Card />
        </div>
        <div>lower</div>
      </div>
    </div>
  )
}

export default Layout