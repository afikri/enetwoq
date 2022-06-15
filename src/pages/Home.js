import ato from '../assets/ato.png';
import atp from '../assets/atp.png';
import ericsson from '../assets/ericsson.png';
import garudafood from '../assets/garudafood.png';
import huawei from '../assets/huawei.png';
import indosat from '../assets/indosat.png';
import melanie from '../assets/melanie.jpeg';
import nokia from '../assets/nokia.png';
import smartfren from '../assets/smartfren.png';
import tata from '../assets/tata.png';
import tokopedia from '../assets/tokopedia.png';
import v1 from '../assets/v1.gif';
import v2 from '../assets/v2.gif';
import v3 from '../assets/v3.gif';
import v4 from '../assets/v4.gif';
import vera from '../assets/vera.png';
import xl from '../assets/xl.png';
import { Hero } from '../components';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Hero />
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

            }}>Our Professional Partners</h2>
          </div>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="box">
                <div className="icon">
                  <img src={atp} style={{ width: "90px", height: "auto" }} alt="logo" />
                </div>
                <h4 className="title"><Link to="/">ATP Project Management Institute (PMI)</Link></h4>
                <p className="description">
                  Project Management Institute is the world's leading not-for-profit professional membership association for the project, program and portfolio management profession.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box">
                <div className="icon">
                  <img src={ato} style={{ width: "180px", height: "auto" }} alt="logo" />
                </div>
                <h4 className="title"><Link to="/">ATO PeopleCert</Link></h4>
                <p className="description" >
                  PeopleCert on behalf of Axelos. Axelos is Global Best Practice in project, programme and portfolio management, IT service management and cyber resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1 style={{ fontWeight: "900" }}>To Be Indonesia’s Best And Trusted Training And Consulting Company.</h1>
              <button
                style={{
                  backgroundColor: "#2575FC",
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline - block",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderStyle: "none",
                  borderRadius: "5px",
                  lineHeight: "1",
                  width: "30%",
                  padding: "20px 20px 20px 20px",
                  transition: "all .4s ease",
                }}
              >Read More</button>
            </div>

            <div className="col-lg-7 content" >
              <p style={{ fontFamily: "Open Sans", textAlign: "justify" }}>
                PT. eNetwoQ ServIT Indonesia or eNetwoQ is a value-driven and technology company. Currently eNetwoQ provides Training &
                Consulting that focused in Project Management, IT Service Management & Agile/Scrum.
              </p>

              <div className="row">
                <div className="col-sm">
                  <h2>Our Mission</h2>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> To Provide World-Class Training & Consulting</li>
                    <li><i className="bi bi-check-circle"></i> Help Our Clients to Achieve Their Goal to Become
                      Successful, Competitive and Sustainable</li>
                  </ul>
                </div>
                <div className="col-sm">
                  <h2>Our Values</h2>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> Customer Focus</li>
                    <li><i className="bi bi-check-circle"></i> Integrity</li>
                    <li><i className="bi bi-check-circle"></i> Nerve</li>
                    <li><i className="bi bi-check-circle"></i> Trust</li>
                    <li><i className="bi bi-check-circle"></i> Agility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="certifications">
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
            }}>Training and Certifications</h2>
          </div>

          <div className="row gy-4">
            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>Project Management<br />Professional&nbsp;(PMP <sup>&reg;</sup>)</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>PRINCE2<sup>&reg;</sup>&nbsp;Foundation</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>PRINCE2<sup>&reg;</sup>&nbsp;Practitioner</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>Risk Management <br />Professional (PMI-RMP<sup>&reg;</sup>&nbsp;)</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b> ITIL<sup>&reg;</sup>&nbsp;4 Foundation</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>Agile Certificate Practitioner (PMI-ACP<sup>&reg;</sup>)&nbsp;</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>PRINCE2<sup>&reg;</sup>&nbsp;Agile Foundation</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 mb-2 h-100">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <button type="button" className="btn btn-warning">Advanced </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading"><b>PRINCE2 Agile<sup>&reg;</sup>&nbsp;Practitioner</b></h3>
                  <div className="mt-2">
                    <div className="row">
                      <div className="col-sm">
                        <div className="mt-5 d-flex align-items-center">
                          <h5 className="review-stat">4.5 &nbsp;</h5>
                          <div className="small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star-half rating-color"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        80343 Learners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="certifications">
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
            }}>Why choose enetwoq</h2>

            <div className="row">
              <div className="col" style={{ paddingBottom: "40px" }}>
                <ul>
                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> Facilitators are experts in their fields with more than 15 years of experience and certified
                  </ol>

                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> Training method using study case, group discussion, template, presentation and role play and game simulation
                  </ol>

                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> Free consultation after class and Whatsapp group
                  </ol>
                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> Free all events enetwoq for alumni</ol>
                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> Partnership with Authorized Training Partner of PMI, Partnership with PMI Indonesia Chapter and
                    Accredited Training Organization Peoplecert/axelos</ol>

                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> 94% exam pass rate</ol>
                  <ol style={{
                    paddingBottom: "10px",
                    fontSize: "20px",
                    paddingRight: "4px",
                  }}>
                    <i className="bi bi-check-circle" style={{ color: "#50d8af" }}></i> Join with eNetwoq biggest community</ol>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={v1} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                  <p className="text-center"><b>Develop skills for real career growth</b> <br />
                    Cutting-edge curriculum designed in guidance with industry and academia to develop job-ready skills
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={v2} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                  <p className="text-center"><b>Learn from experts active in their field</b><br />Leading practitioners who bring current best practices and case studies to sessions that fit into your work schedule.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={v3} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                  <p className="text-center"><b>Learn by working on real-world problems</b><br />
                    Capstone projects involving real world data sets with virtual labs for hands-on learning</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={v4} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                  <p className="text-center"><b>Structured guidance ensuring learning never stops</b><br />
                    24x7 Learning support from mentors and a community of like-minded peers to resolve any conceptual doubts</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section >

      <section id="certifications">
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
            }}>Testimonials</h2>
          </div>
          <div className="row">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="card p-3 mb-2 h-100" style={{ borderRadius: "3%" }}>
                  <div className="mt-5" >
                    <img src={melanie} className="img-responsive center-block d-block mx-auto" alt="melanie" style={{ height: "100px", width: "100px", borderRadius: "50%" }} />
                    <h5 style={{ fontFamily: "Poppins", paddingTop: "10px", textAlign: "center" }}><b>Melani Anastasia</b>
                      <br />Project/Progam Manager ICT</h5>
                    <div className="small-ratings" style={{ textAlign: "center" }}>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                    <p style={{ paddingTop: "20px" }}>Very interactive and 2 ways training, also great trainer and really understand the field and training material. The training is not only about theoretical but also with example in the real world and its best practices. (Telkomtelstra)					</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card p-3 mb-2 h-100" style={{ borderRadius: "3%" }}>
                  <div className="mt-5">
                    <img src={tata} className="img-responsive center-block d-block mx-auto" alt="melanie" style={{ height: "100px", width: "100px", borderRadius: "50%" }} />
                    <h5 style={{ fontFamily: "Poppins", paddingTop: "10px", textAlign: "center" }}><b>Moch. Tata S Ridwanullah</b>
                      <br />Director Destinasi Wisata</h5>
                    <div className="small-ratings" style={{ textAlign: "center" }}>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                    <p style={{ paddingTop: "20px" }}>I chose eNetwoQ as a training institute to prepare for my PMP exam in 2014 due to the structured training method with easy-to-find tips and tricks &amp; delivered by experienced PMP Instructors. (Badan Pelaksana Otorita Danau Toba)					</p>

                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card p-3 mb-2 h-100" style={{ borderRadius: "3%" }}>
                  <div className="mt-5">
                    <img src={vera} className="img-responsive center-block d-block mx-auto" alt="melanie" style={{ height: "100px", width: "100px", borderRadius: "50%" }} />
                    <h5 style={{ fontFamily: "Poppins", paddingTop: "10px", textAlign: "center" }}><b>Vera Lisnan</b>
                      <br />Head of Sales DPLK</h5>
                    <div className="small-ratings" style={{ textAlign: "center" }}>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                      <i className="fa fa-star rating-color"></i>
                    </div>
                    <p style={{ paddingTop: "20px" }}>Two words for eNetwoQ: Professional and Helpful. I passed the PMP certification in 3 months preparation with eNetwoQ, something that I thought impossible. However, that's possible with eNetwoQ. (PT. Asuransi Jiwa BCA)					</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="certifications">
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
            }}>Our Partners</h2>
          </div>
          <div className="row" style={{ background: "#F9F9F9", }}>
            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={ericsson} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={garudafood} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={xl} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={tokopedia} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={smartfren} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={nokia} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={indosat} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-lg-12">
                  <img src={huawei} className="img-responsive center-block d-block mx-auto" alt="Sample Image" />
                </div>
              </div>
            </div>

          </div>
          <hr />
        </div>
      </section>
    </div >
  )
}

export default Home