import React from 'react'
import privacy from '../../assets/Privacy.png'
import privacy2 from '../../assets/Privacy2.png'

const OurPolicy = () => {
  return (
    <div>
      <div>
        <img src={privacy} style={{ backgroundPosition: "center", backgroundSize: "cover", margin: "0", height: "80%", width: "100%" }} alt="logo" />
      </div>
      <div>
        <div class="timeline">
          <div class="my-container">
            <div class="content" style={{ backgroundColor: "#F0F0F0" }}>
              <h2>2021</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy