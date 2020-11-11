import React from 'react'
import '../css/footer.css'
const Footer = () => {
  return (
    <>
      <footer className="backgrounFoter">
          <div class="item1">
              <h2>Quienes somos </h2>
                <p>somos una empresa encargada de hacer tus transaciones repidas</p>
              
          </div>
          <div class="item2">
              <h2>nos ubicamos</h2>
              <ul>
                <li>Estados Unidos</li>
                <li>Panama</li>
                <li>Colombia</li>
                <li>Venezuela</li>
              </ul>
          </div>
          <div class="item3">
              <h2>servicios </h2>
              <ul>
                <li>cambiamos cualquier tipo de divisa</li>
                <li>Pesos Colobianos a Bolivares</li>
                <li>Dolares a Bolivares</li>
              </ul>
          </div>
      </footer>
    </>
  )
}

export default Footer
