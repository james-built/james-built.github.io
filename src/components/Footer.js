import React from 'react'

import instagram from '../icons/instagram50.png'
import twitter from '../icons/twitter50.png'
import github from '../icons/github50.png'

const Footer = () => {
  return (
    <div className=''>
      <a href="https://www.instagram.com/james.b.snapping/"><img src={instagram}/></a>
      <a href="https://twitter.com/gunslingerNZ"><img src={twitter}/></a>
      <a href="https://github.com/james-built"><img src={github}/></a>
    </div>
  )
}

export default Footer