import React from 'react'
import privacy from '../../assets/Privacy.png'
import privacy2 from '../../assets/Privacy2.png'

const OurPolicy = () => {
  return (
    <div style={{ backgroundColor: "#FFF" }}>
      <img src={privacy} style={{
        backgroundPosition: "center", backgroundSize: "cover",
        marginLeft: "auto", marginRight: "auto", width: "auto",
        display:"block"
      }} alt="logo" />
      <div style={{ position: "absolute", color: "yellow", top: "20%", left: "70%", transform: "translate(-50%,-50%)" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "55px", fontWeight: "bolder" }}>Our Privacy Policy</h1>
      </div>

      <section id="partners">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="box">
                <div className="icon">
                  <img src={privacy2} style={{ width: "100px", height: "auto" }} alt="logo" />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <p>
                    Personal data collected on the form is used for course/exam registration and customer support.
                    PT eNetwoQ ServIT Indonesia is committed to maintaining confidentiality of all personal information at all times. <br />
                    PT eNetwoQ ServIT Indonesia undertakes not to sell, rent, lease, or disclose trainee information to any 3rd party without prior consent of the trainee.  <br />
                  </p>
                  <p style={{ color: "red" }}>You may request deletion of your personal data at any time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default OurPolicy