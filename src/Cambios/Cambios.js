import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import foto from '../img/foto.png'
import banesco from '../img/banescop.png'
import bod from '../img/bodp2.png'
import mercantil from '../img/mercantilp.png'
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCrown } from '@fortawesome/free-solid-svg-icons'

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

  useEffect(() => {
    document.getElementById("copInput").focus()
  }, [])

  return (
    <div className="Cambios-page my-auto container-fluid">
      <Row className="body">
        <Col className="items-body1" xl={4} lg={4} md={5} sm={12} xs={12} >
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
                      <InputGroup.Text style={{ width: "57px" }} className="bg-primary font-weight-bold text-white" >
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

                    <CurrencyFormat id="copInput" placeholder="Ingrese la cantidad" className="form-control" decimalSeparator="," thousandSeparator={"."} allowNegative={false}
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
                      <InputGroup.Text style={{ width: "57px" }} className="bg-primary font-weight-bold text-white">
                        VES
                                </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl disabled className="bg-white" />
                  </InputGroup>
                </Form.Group>
                <Button block variant="secondary" className="text-white">Enviar</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-white">
              <p >Al presionar enviar, brokechain le solicitara los datos de la cuenta destino</p>
            </Card.Footer>
          </Card>
        </Col>
        <Col  xl={{ span: 6, offset: 1 }} lg={8} md={7} sm={12} xs={12} >
        <h3 id="selectBankTitle" className="font-italic">Seleciona tu banco...</h3>
          <Container fluid>
            <Row className="column-tasas pt-3">
              {bancos.map((banco, index) => (
                <Col lg={3} md={6} sm={6} xs={12} className="text-center">
                  <Card className="card-tasa d-inline-block border-0 mb-3" >
                  { index === 0 && <FontAwesomeIcon icon={faCrown} className="icon text-secondary crown-icon" /> }
                    <Card.Body className="text-center p-0 py-3">
                      <img src={banco.foto} style={{ height: "40px"}} />
                      <p className="m-0 h6">Tasa</p>
                      <p className="m-0 f-08r text-muted"><FontAwesomeIcon icon={faChartLine} className="icon" />{' '}{banco.tasa}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

        </Col>
      </Row>
    </div>
  )
}

export default Cambios
