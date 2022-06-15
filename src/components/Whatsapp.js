import React from 'react'
import { Link } from "react-router-dom"

const Whatsapp = () => {
    return (
        <div >
            <Link to="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
                className="wa-style-float" target="_blank">
                <i className="fa fa-whatsapp wa-float"></i>
            </Link>
        </div>
    )
}

export default Whatsapp