import React from 'react'

function Plans() {
  return (
    <div className='plan'>
      <h1 className='heading'> choose a <span>plan</span> </h1>

<div className='box-container'>

    <div className='box'>
        <h3 className='title'>Puppy Package</h3>
        <h3 className='day'> 3 weeks </h3>
        <i className='fas fa-dog icon'></i>
        <div className='list'>
            <p> early socialization <span className='fas fa-check'></span> </p>
            <p> master beginner commands<span className='fas fa-check'></span> </p>
            <p> early leash training <span className='fas fa-check'></span> </p>
            <p> Off leash exposure <span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>155</div>
        <button className='btn'> choose plan </button>
    </div>

    <div className='box'>
        <h3 className='title'>Agility Package</h3>
        <h3 className='day'> 3 months </h3>
        <i className='fas fa-dog icon'></i>
        <div className='list'>
            <p> 2 hours weekly <span className='fas fa-check'></span> </p>
            <p> Open Tunnel, Weave Poles, Jumps <span className='fas fa-check'></span> </p>
            <p> Competitons <span className='fas fa-check'></span> </p>
            <p> akc certified <span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>355</div>
        <button className='btn'> choose plan </button>
    </div>

    <div className='box'>
        <h3 className="title">Off-Leash Training</h3>
        <h3 className='day'> 13 weeks </h3>
        <i className='fas fa-dog icon'></i>
        <div className='list'>
            <p> private 45 minute evaluation <span className='fas fa-check'></span> </p>
            <p> 1 hour weekly <span className='fas fa-check'></span> </p>
            <p> equipment provided <span className='fas fa-check'></span> </p>
            <p> graduation <span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>555</div>
        <button className='btn'> choose plan </button>
    </div>

</div>  
      
    </div>
  )
}

export default Plans
