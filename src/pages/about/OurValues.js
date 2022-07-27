import React from 'react'
import values from '../../assets/values.png'

import competence from '../../assets/competence.png'
import integrity from '../../assets/integration.png'
import nerve from '../../assets/neuroimaging.png'
import trust from '../../assets/trust.png'
import agility from '../../assets/agile.png'

const OurValues = () => {
  return (
    <div>
      <img src={values} style={{ backgroundPosition: "center", backgroundSize: "cover", margin: "0", width: "100%" }} alt="logo" />
      <section id="partners">
        <div className="container">
          <div className="section-header">
            <h2 style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
              color: "#54595F",
              textTransform: "uppercase",
              fontWeight: "700",
              position: "relative",
              paddingBottom: "20px"

            }}>Our Mission, Vision and Values</h2>
          </div>

          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="box">
                <h4 className="title">
                  <p className="description">
                    PT. eNetwoQ ServIT Indonesia or eNetwoQ is a technology company. Currently eNetwoQ provides Training & Consulting that focused in Project Management, IT Service Management & Agile/Scrum.
                  </p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="container">
          <div className="section-header">
            <h4 style={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              color: "#54595F",
              textTransform: "uppercase",
              fontWeight: "700",
              position: "relative",
              paddingBottom: "20px"
            }}>Our Vision</h4>
            <div className="col-md-12 content" >
              <div className="col-sm" style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "justify", display: 'grid', gridTemplateColumns: "100%" }}>
                  <p>
                    To be Indonesia's best and trusted training and consulting company. Being the best means providing outstanding quality, service and value.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section id="certifications">
        <div className="container">
          <div className="section-header">
            <h4 style={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              color: "#54595F",
              textTransform: "uppercase",
              fontWeight: "700",
              position: "relative",
              paddingBottom: "20px"
            }}>Our Values</h4>
            <div className="col-md-12 content" >
              <div className="col-sm" style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "justify", display: 'grid', gridTemplateColumns: "100%" }}>
                  To provide World-Class Training & Consulting and to Help Our Clients Successful, More Competitive and Sustainable.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="h-100">
                  <div className="card-body" style={{ display: "block", textAlign: "center" }}>
                    <img src={competence} style={{ width: "80%", height: "100%" }} />
                    <p><b>Competence</b></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="h-100">
                  <div className="card-body" style={{ display: "block", textAlign: "center" }}>
                    <img src={integrity} style={{ width: "80%", height: "100%" }} />
                    <p><b>Integrity</b></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="h-100">
                  <div className="card-body" style={{ display: "block", textAlign: "center" }}>
                    <img src={nerve} style={{ width: "80%", height: "100%" }} />
                    <p><b>Nerve</b></p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="h-100">
                  <div className="card-body" style={{ display: "block", textAlign: "center" }}>
                    <img src={trust} style={{ width: "80%", height: "100%" }} />
                    <p><b>Trust</b></p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="h-100">
                  <div className="card-body" style={{ display: "block", textAlign: "center" }}>
                    <img src={agility} style={{ width: "70%", height: "100%" }} />
                    <p><b>Agility</b></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default OurValues