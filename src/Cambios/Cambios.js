import React, { useState } from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import foto from '../img/foto.png'
import banesco from '../img/banescop.png'
import bod from '../img/bodp.png'
import mercantil from '../img/mercantilp.png'

const bancosData = [
  {
    nombre:"BANESCO",
    foto:banesco,
    tasa:0.0076,
  },
  {
    nombre:"BOD",
    foto:bod,
    tasa:0.0095,
  },
  {
    nombre:"MERCANTIL",
    foto:mercantil,
    tasa:0.0095,
  },

]

function Cambios() {
  const [bancos, setBancos] = useState(bancosData)
  return (
      <div className="Cambios-page my-auto"> 
           <Row className="body">
              <Col xs={{ order: 'last' }} md={{ order: 'first' }} className="items-body1 col-12 col-sm-12 col-md-4 col-lg-4 "  >
                    <Card className="card1 mt-2">
                        <Card.Header>
                            {/* <img src={banesco} alt="" style={{width:"100%"}}/> */}

                        </Card.Header>
                        <Card.Body>
                          <Form>
                          <Form.Group >
                            <Form.Label>Tasa de <span style={{fontWeight:"bold"}}>BOD</span> </Form.Label>
                            <InputGroup className="mb-2 mr-sm-2">
                              <InputGroup.Prepend>
                                <InputGroup.Text className="padding0">
                                  <img src={bod} style={{width:"50px"}} />
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl  placeholder="0.0076" />
                            </InputGroup> 
                          </Form.Group>

                          <Form.Group >
                            <Form.Label>Pesos a Cambiar </Form.Label>
                            <InputGroup className="mb-2 mr-sm-2">
                              <InputGroup.Prepend>
                                <InputGroup.Text >
                                              COP
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl  placeholder="100.000" />
                            </InputGroup> 
                          </Form.Group>
                              
                          <Form.Group >
                            <Form.Label>Bolivares a Recibir </Form.Label>
                            <InputGroup className="mb-2 mr-sm-2">
                              <InputGroup.Prepend>
                                <InputGroup.Text >
                                              VES
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl  placeholder="21.564.789.42" />
                            </InputGroup> 
                          </Form.Group>
                            <Button block>Enviar</Button>
                          </Form>
                        </Card.Body>
                        <Card.Footer>
                            <p >Al presionar enviar, brokechain le solicitara los datos de la cuenta destino</p>
                        </Card.Footer>
                    </Card>
                </Col>
              <Col xs={{ order: 'first' }} md={{ order: 'last' }} className="items-body2 col-12 col-sm-12 col-md-8 col-lg-8 " >
                        <h2 className="text-center">Seleciona tu banco</h2>
                            <Row>
                              {bancos.map(banco=>(
                                <Col>
                                  <Card className="card2">
                                    <Card.Body className="text-center">
                                      <img src={banco.foto} style={{width:"40%", height:"50px"}}/>
                                     <p>Tasa</p>
                                     <p>{banco.tasa}</p>
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
