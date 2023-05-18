import React from 'react';
import img1 from '../images/developpement-de-logiciels.png'
import img2 from '../images/fournitures-de-bureau.png'
import './NosProduits.css'
export default function NosProduits(){
    
      return (
        <div className="services-container">
        <h1 className='title'>NOS PRODUITS ET SERVICES</h1>
        <div className='cardDeckStyle' >
          <div className="card" >
            <img className="card-img-top" src={img1} />
            <div className="card-body">
              <h5 className="card-title">Logiciels</h5>
              <p className="card-text">
              Sites et des applications web.
              Logiciels de gestion <br />
              Antivirus
              </p>
            
            </div>
          </div>
          <div className="card" >
            <img className="card-img-top" src='https://cdn-icons-png.flaticon.com/512/22/22919.png' alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Réseaux informatiques</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
           
            </div>
          </div>
          <div className="card" >
            <img className="card-img-top" src={"https://cdn-icons-png.flaticon.com/512/4218/4218338.png"} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Materiel Informatique</h5>
              <p className="card-text">
              Ordinateurs de bureau <br />
              Ordinateur portables <br />
              Disque durs 
                  ...
              </p>
            
            </div>
            
          </div>

          
          
        </div>

<div className='cardDeckStyle'>
<div className="card" >
  <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/5755/5755296.png" alt="Card image cap"  />
  <div className="card-body">
    <h5 className="card-title">Mobilier de bureau</h5>
    <p className="card-text">
    Bureaux <br />
    Chaises et fauteuille<br />
    Table de réunion,Tables bases<br />  
    </p>
  
  </div>
</div>
<div className="card" >
  <img className="card-img-top" src='https://cdn-icons-png.flaticon.com/512/2851/2851266.png' alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Nos marques</h5>
    <p className="card-text">
    HP ,DELL <br />
    EPSON ,LEXMARK <br />
    TOSHIBA ,CANON <br />
    </p>
 
  </div>
</div>
<div className="card" >
  <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/5439/5439223.png" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Fourniture de bureau</h5>
    <p className="card-text">
    Papiers et impressions <br />
    Portes documents,dossiers <br />
    Stylos,Chemises
    </p>
  
  </div>
  
</div>



</div>
</div>
      );
    }


    

    
        
        
       
        
