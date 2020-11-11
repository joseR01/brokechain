import React from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup, Nav } from 'react-bootstrap'
import '../css/Convertidors.css'
import Mercantil from '../img/mercantilp.png'
import BV from '../img/venezuela.jpg'
import BC from '../img/Colombia.jpg'
import Banesco from '../img/banescop.png'
import Bod from '../img/bodp.png'
import flecha from '../img/flecha.png'
import cambio from '../img/cambio.jpg'



const Convertidor = () => {
  return (
    <>
      <div className="card1">
        <h1>Elige tu banco</h1>
          <div className="Bancos">
          <img src={Banesco} className="itemc1"/>
          <img src={Mercantil} className="itemc2"/>
          <img src={Bod} className="itemc3"/>
          </div>
          <div className="Tasas">
            <div className="itemc1">
              <img src={Banesco} alt=""/>
              <p>0.0081</p>
            </div>
            <h6 className="itemc2">Tasa de otros Bancos</h6>
            <div className="itemc3">
            <img src={cambio} alt=""/>
              <p>0.0097</p>
            </div>
          </div>
          <div className="Cambio">
            <div className="itemc1">
            <img src={BC} alt=""/>
              <p>180.000</p>
            </div>
              <img src={flecha} className="flecha" alt=""/>
            <div className="itemc2">
            <img src={BV} alt=""/>
              <p>2.582.000</p>
            </div>
          </div>
          <button className="boton">Seguir</button>
      </div>

    </>
  )
}

export default Convertidor
