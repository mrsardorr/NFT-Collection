import React from 'react'
import "./under_header.scss"
import Info from './info/info'
import img from "../../assets/header-section/under-header/people.png"

const under_header = () => {
  return (
    <div className="under_header">
        <div className="container">

            <h4>Collection</h4>
            <h1>Meet Our Bored Peeps!</h1>
            <div className="d-flex justify-content-between align-items-center">
                <div className="infos">

                    <Info title="6500 Bored Peeps" text="Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus."/>

                    <Info title="Mint Price & Date" text="Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus."/>

                    <Info title="Why Bored Peeps" text="Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus."/>
                </div>
                <img src={img} alt="" />
            </div>

        </div>
    </div>
  )
}

export default under_header