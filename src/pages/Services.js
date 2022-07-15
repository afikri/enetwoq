import React from 'react'
import service from '../assets/service_cropped.png';

const Services = () => {
  return (
    <div>
      <div>
        <img src={service} style={{ backgroundPosition: "center", backgroundSize: "cover", margin: "0", height: "80%", width: "100%" }} alt="logo" />
      </div>
      <section id="certifications">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 my-container">
              <div className="card p-3 mb-2 h-100" style={{ backgroundColor: "#F0F0F0" }}>
                <h3 className="heading">Digital Transformation</h3>
                <div>
                  <i className="fa fa-arrow-right fa-2x" style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    color: "#2553FF"
                  }}></i>
                </div>
                <div className="my-overlay">
                  <div className="my-text">
                    <p style={{ textAlign: "justify", color:"white"}}>
                      Digital transformation adopts digital technology to transform services or business to enable a significant improvement in the realization of an organization's objectives. <br />We provide digital solutions enable organization to improve efficiency, increase transparency, cost saving, revenue growth,
                      better customer experience, better employee engagement and culture and improve competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>






            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100" style={{ backgroundColor: "#F0F0F0" }}>
                <div className="d-flex justify-content-between">
                  <h3 className="heading">Scrum & Agile Enterprise</h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Agile is a proven way to transform business, catalyze innovation and accelerate profitable growth. We can help you to agility to the team, team of team, and organization level to improve time-to-market, boost quality, raise employee morale, deliver value & highest business product,
                  collaborate better with stakeholder, customer satisfaction and become a truly adaptive organization.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100" style={{ backgroundColor: "#F0F0F0" }}>
                <div className="d-flex justify-content-between">
                  <h3 className="heading">Project Management Consulting</h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  Project management Consulting provides the right combination of methodology, best practice, training, resources and technology. <br />We offer Project Management Consulting that will improve the project’s success, provide project visibility, assurance on progress, early warning system, executive status and aligned execution.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100" style={{ backgroundColor: "#F0F0F0" }}>
                <div className="d-flex justify-content-between">
                  <h3 className="heading">PMO Consulting</h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  PMO consulting provides the most practical and widely adopted PMO methodology in the world. The methodology provides a structured to set up new PMOs or assess and redesign existing PMOs. The PMO may be project, program or portfolio level or it may be operational, tactical or strategic.
                  <br />We offer PMO Consulting to make sure PMO enable to generate value and thrive
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100" style={{ backgroundColor: "#F0F0F0" }}>
                <div className="d-flex justify-content-between">
                  <h3 className="heading">IT Service Management Consulting</h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  IT Infrastructure Library (ITIL) is the most widely accepted approach to IT Service Management (ITSM). ITIL is the most widely recognized framework for IT and digitally enabled services in the world.
                  <br />ITIL has Service Value System (SVS) & 4 Dimension Model framework. We offer ITIL Consulting ensuring practices are effective, follow good practice and are governed for establishing effective service management system.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100" style={{ backgroundColor: "#F0F0F0" }}>
                <div className="d-flex justify-content-between">
                  <h3 className="heading">IT Security Management Consulting</h3>
                </div>
                <p style={{ textAlign: "justify" }}>
                  ISO/IEC 27001 is widely known, providing requirements for an Information Security Management System (ISMS).  It is an excellent framework which helps organizations manage and protect their information assets.
                  <br />We provide ISO 27001 Consulting that enables organization to guarantee the availability, integrity and confidentiality of an organization's data, information and IT services.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Services