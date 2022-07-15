import React from 'react'

const Events = () => {
  return (
    <div>
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
            }}>All Events</h2>
          </div>

          <div className="row gy-4">
            <div className="col-md-12">
              <div className="card p-3 mb-2 h-100" style={{backgroundColor:"yellow"}}>
                <div className="d-flex justify-content-between"  style={{backgroundColor:"red"}}>
                  <div className="d-flex flex-row align-items-center">
                    Hello
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="heading">Project Management Professional</h3>
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

    </div>
  )
}

export default Events
