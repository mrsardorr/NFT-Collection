import React from 'react'
import "./exclusiveContent.scss"
import Dot from './components/dot/dot'
import Person from './components/person/person'
import {common, uncommon, rare, veryRare, legendary} from "../../assets/main-section/exlusive-content/humans/index"


const exclusiveContent = () => {
    console.log(common)
  return (
    <div className="exclusiveContent">
        <div className="container">
            <Dot/> <h4>Rarity</h4>
            <h1>Exclusive Content</h1>
            <Person type="Common" tier={1} stars={1} image={common}/>
            <Person type="Uncommon" tier={2} stars={2} image={uncommon}/>
            <Person type="Rare" tier={3} stars={3} image={rare}/>
            <Person type="Very Rare" tier={4} stars={4} image={veryRare}/>
            <Person type="Legendary" tier={5} stars={5} image={legendary}/>
        </div>
    </div>
  )
}

export default exclusiveContent