import React from 'react'
import Yes from "./stars/star/yes"
import No from './stars/star/no'
import "./person.scss"


const person = (props) => {
    let arry = []
    for(let i = 0;i<=props.stars-1;i++){
        arry.push(<Yes/>)
    }
    for(let a = props.stars;a<=4;a++){
            arry.push(<No/>)
    }

  return (
    <div className="person d-flex justify-content-between">
        <div className="info">
            <h3>{props.type}</h3>
            <div className="d-flex align-items-center">
                <h5>Tier {props.tier}</h5>
                <div className="stars">
                    {
                       arry.map((elem,idx)=>{
                        return elem
                       }) 
                    }
                </div>
            </div>
            <p>Diam vestibulum mattis aliquam, urna <br /> condimentum id. Ultrices sit tincidunt <br /> diam integer amet, nec facilisis nec mi. <br /> Faucibus posuere turpis commodo leo <br /> ipsum magnis.</p>
        </div>
        <div className="image">
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default person