import React from 'react'
import './Milestone.css'
import milestone from '../../assets/milestone.png'

const Milestones = () => {
  return (
    <div>
      <div>
        <img src={milestone} style={{ backgroundPosition: "center", backgroundSize: "cover", margin: "0", height: "80%", width: "100%" }} alt="logo" />
      </div>
      <div style={{ background: "grey" }}>
        <div class="timeline" style={{ backgroundColor: "grey" }}>
          <div class="my-service-container right">
            <div class="content" style={{ backgroundColor: "#00837D" }}>
              <h2>2021</h2>
              <ul>
                <li>
                  Authorized Training Partners (ATP) Project Management Institute (PMI), USA
                </li>
                <li>
                  Approved PMP Training ATP PMI
                </li>
                <li>
                  Approved PRINCE2 Foundation & Practitioner from PeopleCert on behalf of Axelos
                </li>
                <li>
                  Approved PRINCE2 Agile Foundation & Practitioner from PeopleCert on behalf of Axelos
                </li>
              </ul>
            </div>
          </div>
          <div class="my-service-container left">
            <div class="content" style={{ backgroundColor: "#FEA501" }}>
              <h2>2019</h2>
              <ul>
                <li>
                  Accredited Exam Organization (AEO) PeopleCert on behalf of Axelos
                </li>
                <li>
                  Accredited Training Organization (ATO) PeopleCert on behalf of Axelos
                </li>
                <li>
                  Approved ITIL 4 Foundation from PeopleCert on behalf of Axelos
                </li>
              </ul>
            </div>
          </div>
          <div class="my-service-container right">
            <div class="content" style={{ backgroundColor: "#00837D" }}>
              <h2>2014</h2>
              <p>
                Established Yayasan eNetwoQ
              </p>
            </div>
          </div>
          <div class="my-service-container left">
            <div class="content" style={{ backgroundColor: "#FEA501" }}>
              <h2>2013</h2>
              <p>
                Established PT.eNetwoQ ServIT Indonesia
              </p>
            </div>
          </div>
          <div class="my-service-container right">
            <div class="content" style={{ backgroundColor: "#00837D" }}>
              <h2>2012</h2>
              <ul>
                eNetwoQ started from a dream. <br />
                <li>

                  Our first class was Networking in March 2012
                </li>
                <li>
                  IT Service Management class in August 2012
                </li>
                <li>
                  Project Management class in November 2012
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Milestones