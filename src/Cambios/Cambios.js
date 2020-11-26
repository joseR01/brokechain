import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import foto from '../img/foto.png'
import banesco from '../img/banescop.png'
import bod from '../img/bodp2.png'
import mercantil from '../img/mercantilp.png'
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCrown, faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const bancosData = [
  {
    id:1,
    nombre: "BANESCO",
    foto: banesco,
    tasa: 0.00468,
  },
  {
    id:2,
    nombre: "BOD",
    foto: bod,
    tasa: 0.00575,
  },
  {
    id:3,
    nombre: "MERCANTIL",
    foto: mercantil,
    tasa: 0.00509,
  },
  {
    id:4,
    nombre: "BANESCO",
    foto: banesco,
    tasa: 0.00468,
  },
  {
    id:5,
    nombre: "BOD",
    foto: bod,
    tasa: 0.00575,
  },
  {
    id:6,
    nombre: "MERCANTIL",
    foto: mercantil,
    tasa: 0.00509,
  },
  {
    id:7,
    nombre: "BANESCO",
    foto: banesco,
    tasa: 0.00468,
  },
  {
    id:8,
    nombre: "BOD",
    foto: bod,
    tasa: 0.00575,
  },
  {
    id:9,
    nombre: "MERCANTIL",
    foto: mercantil,
    tasa: 0.00509,
  },
  

]

function Cambios() {
  const [bancos, setBancos] = useState(bancosData)
  const [cop, setCop] = useState("")

  const [selectBank, setSelectBank] = useState("")
  
  const exchange = ()=>{
    const x = cop;
    const y = selectBank.tasa;
    const result = x/y;
    return result
  }


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
              <span className="text-white"> Envia facil y rapido</span>
            </Card.Header>
            <Card.Body className="bg-white">
              <Form>

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
                {/* PARTE QUE SE MUESTRA A MAS DE 768PX ------------------------------------------------------*/}
                <div className="ocultar">
                    {selectBank == "" ? 
                    (<>
                    <div className="mt-4">
                      <h5 className="text-primary d-inline">Selecciona tu banco...</h5>
                      <FontAwesomeIcon icon={faHandPointRight} className="icon text-secondary h2 float-right" />
                      <hr className="bg-primary"/>
                    </div>
                    </>)
                    :
                    (
                      <Form.Group >
                      <Form.Label>Tasa de <span style={{ fontWeight: "bold" }}>{selectBank.nombre}</span> </Form.Label>
                      <InputGroup className="mb-2 mr-sm-2">
                        <InputGroup.Prepend>
                          <InputGroup.Text style={{ width: "57px" }} className="bg-white p-0 justify-content-center">
                            <img src={selectBank.foto} style={{ width: "35px" }} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={selectBank.tasa} disabled />
                      </InputGroup>
                    </Form.Group>
                    )
                    }
                </div>
                {/* PARTE QUE SE MUESTA A MENOS DE 768PX--------------------------------------------------- */}
                    <div className="ocultarmin">
                      <Form.Group>
                        <Form.Label className="text-primary h-5">Selecciona tu banco...</Form.Label>
                        <InputGroup className="mb-2 mr-sm-2">
                        <InputGroup.Prepend>
                        <InputGroup.Text style={{ width: "57px" }} className="bg-white p-0 justify-content-center">
                        <img src={selectBank.foto} style={{ width: "35px" }} />
                          </InputGroup.Text>
                          </InputGroup.Prepend>
                        <Form.Control as="select" 
                          onChange={(e)=>{
                            let bancoSeleccionado = bancos.find(banco => banco.id === Number(e.target.value))
                            let value = e.target.value;
                            if(value == 0){
                              // setSelectBank(
                              //   {id: null, nombre: null, foto: null, tasa:0}
                              // )
                              setSelectBank({}
                              )
                            }else{
                              setSelectBank(bancoSeleccionado)

                            }
                            console.log(value)
                                                        
                          }}
                        >
                            <option value={0}>Selecciona tu Banco</option>
                            {
                              bancos.map((banco)=>(
                              <option value={banco.id}>
                              
                                {banco.nombre}
                              </option>))  
                            }
                        </Form.Control>
                        </InputGroup>
                      </Form.Group>
                      {console.log(selectBank)}
                    </div>
                {/* FIN DE MOSTRAR Y OCULTAR-------------------------------- */}

                <Form.Group >
                  <Form.Label>Bolivares a Recibir </Form.Label>
                  <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text style={{ width: "57px" }} className="bg-primary font-weight-bold text-white">
                        VES
                                </InputGroup.Text>
                    </InputGroup.Prepend>
                    <CurrencyFormat className="form-control" value={exchange().toFixed(0)} displayType={'text'} decimalSeparator="," thousandSeparator={"."} allowNegative={false} prefix={""}  />
                  </InputGroup>
                </Form.Group>
                <Button block variant="secondary" className="text-white" >Enviar</Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-white">
              <p >Al presionar enviar, brokechain le solicitara los datos de la cuenta destino</p>
            </Card.Footer>
          </Card>
        </Col>

        <Col  xl={{ span: 6, offset: 1 }} lg={8} md={7} sm={12} xs={12} className="ocultar">
        <h3 id="selectBankTitle" className="font-italic">Seleciona tu banco...</h3>
          <Container fluid>
            <Row className="column-tasas pt-3">
              {bancos.map((banco, index) => (
                <Col lg={3} md={6} sm={6} xs={12} className="text-center">
                  <Card className={selectBank.id == banco.id ? 
                    "card-tasa-select d-inline-block border-0 mb-3":"card-tasa d-inline-block border-0 mb-3" }>
                  { index === 0 && <FontAwesomeIcon icon={faCrown} className="icon text-secondary crown-icon" /> }
                    <Card.Body className="text-center p-0 py-3"
                       onClick={()=>{setSelectBank(banco)}}
                    >
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
