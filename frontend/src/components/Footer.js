import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const labelStyle = {
    color: 'white',
  }
  return (
    <footer className='bg-primary'>
      <Container style={labelStyle} className='pt-3 pb-3'>
        <Row className='text-center '>
          <Col>
            <label htmlFor=''>
              Diseñado por: <strong>Eduardo Apodaca</strong> |{' '}
              <a
                style={labelStyle}
                href='https://eduardo99ja.github.io/portfolio/'
                target='_blank'
              >
                Visita mi sitio web
              </a>
              <br />
              ¿Necesitas una pagina web?
              <br />
              Contáctame mandando un correo a{' '}
              <strong>
                {' '}
                <a
                  style={labelStyle}
                  href='mailto:eduardo1ja99@gmail.com'
                  target='_blank'
                >
                  eduardo1ja99@gmail.com
                </a>{' '}
              </strong>
            </label>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>Copyright &copy; | Todos los derechos reservados</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
