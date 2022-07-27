import React from 'react'
import contactus from '../../assets/contactus.png'


const ContactUs = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#FFF" }}>
        <img src={contactus} style={{
          backgroundSize: "cover",
          margin: "0",
          width: "auto",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }} alt="logo" />
      </div>
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
            }}>Contact Us</h4>
            <h6
              style={{
                fontFamily: "Montserrat",
                fontSize: "18px",
                color: "#54595F",
                textTransform: "uppercase",
                fontWeight: "700",
                position: "relative",
                textAlign: "center",
                verticalAlign: "middle",
                paddingBottom: "20px"
              }}
            >Our location<br />Indonesia</h6>
          </div>
        </div>
      </section >
      <section id="certifications">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100">
                <div className="mt-5">
                  <h6
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "26px",
                      color: "#54595F",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      position: "relative",
                      textAlign: "center",
                      verticalAlign: "middle",
                      paddingBottom: "20px"
                    }}
                  >Jakarta</h6>
                  <a href="https://goo.gl/maps/vwiBKYRcFx1FKNnp6">
                    <i className="fa fa-map-marker fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
                  </a>
                  <h5>
                    South Quarter Tower A
                    18th Floor Jl. R.A Kartini Kav 8, Cilandak Barat, Jakarta, 12430
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-3 mb-2 h-100">
                <div className="mt-5">
                  <div className="ms-2 c-details">
                    <h6
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "26px",
                        color: "#54595F",
                        textTransform: "uppercase",
                        fontWeight: "700",
                        position: "relative",
                        textAlign: "center",
                        verticalAlign: "middle",
                        paddingBottom: "20px"
                      }}
                    >Depok</h6>
                  </div>
                  <a href='https://goo.gl/maps/5tmgF7NwQhTKaDoQ9'>
                    <i className="fa fa-map-marker fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
                  </a>
                  <h5>
                    Telaga Golf
                    Business Center Milan Avenue Blok R-CE No.19, Sawangan, Depok, 16511
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section id="contact" style={{marginBottom:"40px"}}>
        <div className="container">
          <div className="row contact-info">
            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3>Contact Form</h3>
                <a href='http://google.com'>
                  <i className="fa fa-wpforms fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3>Email Info</h3>
                <a href="mailto:info@enetwoq.com">
                  <i className="fa fa-envelope fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3>Email Training</h3>
                <a href="mailto:training@enetwoq.com">
                  <i className="fa fa-line-chart fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}>
                  </i>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3>Telephone</h3>
                <i className="fa fa-phone fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row contact-info">
            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3>Mobile Phone</h3>
                <i className="fa fa-mobile fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
              </div>
            </div>

            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3>Live Chat</h3>
                <i className="fa fa-comments fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
              </div>
            </div>

            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3 style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  color: "#54595F",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  position: "relative",
                }}>Whatsapp</h3>
                <a href="https://api.whatsapp.com/send?phone=6281295945123">
                  <i className="fa fa-whatsapp fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div style={{
                textAlign: "center"
              }}>
                <h3 style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  color: "#54595F",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  position: "relative",
                }}>Telegram</h3>
                <a href="https://t.me/joinchat/">
                  <i className="fa fa-telegram fa-4x" style={{ marginBottom: "15px", display: "flex", justifyContent: "center", color: "#2575FC" }}></i>
                </a>
              </div>
            </div>

          </div>
        </div>

      </section >
    </div >
  )
}

export default ContactUs