import React from 'react'
import ExclusiveContent from "./exclusiveContent/exclusiveContent"

const main = () => {
  return (
    <main>
        <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="55 0 1240 220">
                <path fill="#FBF1E6" fill-opacity="1" d="M0,96L40,122.7C80,149,160,203,240,192C320,181,400,107,480,96C560,85,640,139,720,170.7C800,203,880,213,960,192C1040,171,1120,117,1200,85.3C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
        <ExclusiveContent/>
        <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBF1E6" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,149.3C672,128,768,128,864,160C960,192,1056,256,1152,266.7C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    </main>
  )
}

export default main