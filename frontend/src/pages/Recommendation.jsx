import React from 'react'

const Recommendation = () => {
  return (
    <div className='rec'>
      <div className='mood'>
        <h1>Your Mood: Happy</h1>
      </div>
      <div className='suggestion'>
        <h3>Recommendation</h3>
        <p>Based on your input, we recommend...</p>
      </div>
    </div>
  )
}

export default Recommendation