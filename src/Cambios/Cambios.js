import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import foto from '../img/foto.png'
import banesco from '../img/banescop.png'
import bod from '../img/bodp2.png'
import mercantil from '../img/mercantilp.png'
import CurrencyFormat from 'react-currency-format';
import { useRef } from 'react'

const bancosData = [
  {
    nombre: "BANESCO",
    foto: banesco,
    tasa: 0.0076,
  },
  {
    nombre: "BOD",
    foto: bod,
    tasa: 0.0095,
  },
  {
    nombre: "MERCANTIL",
    foto: mercantil,
    tasa: 0.0095,
  },

]

function Cambios() {
  const [bancos, setBancos] = useState(bancosData)
  const [cop, setCop] = useState("")
  const copInput = useRef(null)
  
  useEffect(() => {
    if(copInput){
      // copInput.current.focus()
      console.log(copInput)
    }

  }, [])

  return (
    <div className="Cambios-page my-auto">
      <Row className="body">
        <Col className="items-body1 col-12 col-sm-12 col-md-4 col-lg-4 "  >
          <Card className="card-convertidor mt-2" border="primary" bg="primary">
            <Card.Header  >
              {/* <img src={banesco} alt="" style={{width:"100%"}}/> */}
              <span className="text-white"> Envia con nosotros</span>
            </Card.Header>
            <Card.Body className="bg-white">
              <Form>
                <Form.Group >
                  <Form.Label>Tasa de <span style={{ fontWeight: "bold" }}>BOD</span> </Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text style={{ width: "57px" }} className="bg-white p-0 justify-content-center">
                        <img src={bod} style={{ width: "35px" }} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl disabled className="bg-white" />
                  </InputGroup>
                </Form.Group>

                <Form.Group >
                  <Form.Label>Pesos a Cambiar </Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text style={{ width: "57px" }} className="bg-secondary" >
                        COP
                                </InputGroup.Text>
                    </InputGroup.Prepend>
                    {/* <CurrencyFormat placeholder="Ingrese la cantidad" className="form-control" thousandSeparator={","} allowNegative={false} 
                                onChange={ e => {
                                    const valor = e.target.value.replace(/,/g, "")
                                        setCop(valor)
                                    // this.calculateRate()
                                }}
                            /> */}

                    <CurrencyFormat placeholder="Ingrese la cantidad" className="form-control" decimalSeparator="," thousandSeparator={"."} allowNegative={false}
                      ref={copInput}
                      onChange={e => {
                        const valor = e.target.value.replace(/\./g, "").replace(/,/g, ".")
                        setCop(valor)
                        // this.calculateRate();
                      }}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group >
                  <Form.Label>Bolivares a Recibir </Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text style={{ width: "57px" }} className="bg-secondary">
                        VES
                                </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl disabled className="bg-white" />
                  </InputGroup>
                </Form.Group>
                <Button block>Enviar</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-white">
              <p >Al presionar enviar, brokechain le solicitara los datos de la cuenta destino</p>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="items-body2 col-12 col-sm-12 col-md-8 col-lg-8 " >
          <h2 className="text-center">Seleciona tu banco</h2>
          <Row>
            {bancos.map(banco => (
              <Col>
                <Card className="card-tasa">
                  <Card.Body className="text-center">
                    <img src={banco.foto} style={{ height: "40px" }} />
                    <p className="m-0">Tasa</p>
                    <p className="m-0">{banco.tasa}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Col>
      </Row>
    </div>
  )
}

export default Cambios
