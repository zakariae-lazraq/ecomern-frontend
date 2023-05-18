import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'

export default function FooterPage() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <Container fluid>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4  footerTitle'>
                <MDBIcon icon="gem" className="me-3" />
                DevoSystem
              </h6>
              <p style={{ textAlign: 'justify' }} className='FooterText'>
              La société Devosystem SARL a été crée en 2010.Devosystem est une entreprise spécialisée dans les domaines des nouvelles technologies tel que l'informatique et le service à domicile.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footerTitle'>
              <MDBIcon icon="box" className="me-3" />
                
                Products</h6>
            <div className='FooterText'>
            <h6>Web App</h6>
            <h6>Mobile App</h6>
            <h6>Desktop App</h6>
            <h6>AI Service</h6>
            <h6>IT Material</h6>
            <h6>IT Solution</h6>
            </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footerTitle'>
              <MDBIcon icon="lightbulb" className="me-3" />
                NOS SOLUTIONS</h6>
                
                <a href='https://www.devosystem.com/DEVO-paye.html' className='footerLink'>
                DEVO paye
                </a>
                <br />
                <a href='https://www.devosystem.com/DEVO-Avocat.html' className='footerLink'>
                DEVO AVOCAT
                </a>
                <br />
             
                <a href='https://www.devosystem.com/DEVO-Caisse.html' className='footerLink'>
                DEVO CAISSE
                </a>
                <br />
              
                <a href='https://www.devosystem.com/DEVO-Commerce.html' className='footerLink'>
                DEVO stock
                </a>

                <br />

                <a href='https://www.devosystem.com/DEVO-Ecole.html' className='footerLink'>
                DEVO ECOLE
                </a>
                <br />
                <a href='https://www.devosystem.com/DEVO-document.html' className='footerLink'>       
                  DEVO Document
                  </a>
                <br />
                <a href='https://www.devosystem.com/DEVO-projet.html' className='footerLink'>
                DEVO projet
                </a>
                

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footerTitle'>
              <MDBIcon icon="envelope" className="me-3" />
                Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Devosystem Appt N° 5, Alwifak 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                devosystem.sarl@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 05 20 34 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 06  21 34 56 79
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 DevoSystem ,tous les droits sont réservés.
      
        <a className='text-white' href='https://www.devosystem.com/' style={{marginLeft:'5px'}}>
               DevoSystem.com
        </a>
      </div>
       </Container>
    </MDBFooter>
  );
}