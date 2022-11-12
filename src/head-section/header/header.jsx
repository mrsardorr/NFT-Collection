import React from 'react'
import Navbar from './navbar/Navbar'
import "./header.scss"
import Btn from "../../components/button/button"

const header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <Navbar/>
          <div className="header__info text-center">
            <h3>NFT Collection</h3>
            <h1>Bored <br/> NFT Peeps</h1>
            <p>Tempor interdum sed nisl aliquam ut orci feugiat <br /> neque. Nibh amet proin in tristique. Ipsum morbi <br /> adipiscing faucibus eu odio in tellus risus.</p>
            <Btn name="OpenSea"/>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default header