import React from 'react'
import ceo from '../assets/ceo.png';

const Hero = () => {
    return (
        <div>
            <img src={ceo} style={{ backgroundPosition: "center", backgroundSize: "cover", margin: "0", height: "80%", width: "100%" }} alt="logo" />
            <div style={{ position: "absolute", color: "#FFF", top: "50%", left: "70%", transform: "translate(-50%,-50%)" }}>
                <h1 style={{ fontSize: "55px", fontWeight: "bolder", width: "800px" }}>1<sup>st</sup> Indonesian Company <br />Partner with PMI & PeopleCert/Axelos</h1>
                <h6 style={{ fontFamily: "Poppins" }}>
                    We provide the best training and consulting in Project Management, PMO,<br />
                    Agile & IT Service Management
                </h6>
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
                        fontWeight: "400",
                        borderStyle: "none",
                        borderRadius: "5px",
                        lineHeight: "1",
                        width: "40%",
                        padding: "20px 20px 20px 20px",
                        transition: "all .4s ease",
                        "&:hover": {
                            background: "red"
                        },
                    }}
                >Explore Programs</button>
            </div>

        </div>
    )
}

export default Hero