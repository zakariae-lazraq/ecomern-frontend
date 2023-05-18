import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.css'

function FormService() {
  const [formData, setFormData] = useState({
    besoin: '',
    Taille_projet: '',
    cahier_charge: '',
    video: '',
    Prise_photo: '',
    Impression:'',
    Civilité:'',
    Nom_complet:'',
    Raison_sociale:'',
    Type_structure:'',
    Secteur_activite:'',
    Telephone_fixe:'',
    Telephone_mobile:'',
    Email:'',
    ville:'',
    pays:'',
    Description:'',

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add any additional form submission logic here
  };

  return (
    <>
    <h1 className='title'>Give Me Idea About Your App</h1>
    <Form onSubmit={handleSubmit} className='FormContainer'>
      <Form.Group controlId="besoin">
        <Form.Label>Votre besoin:</Form.Label>
        <Form.Control as="select" name="besoin" onChange={handleInputChange} value={formData.besoin} required>
          <option >Création de site web</option>
          <option >Devellopement d'une application </option>
          <option >Hébergement et nom de domaine</option>
          <option >Réferencement</option>
          <option >Loog /Carte de visite / Entéte</option>
          <option >Plaquette / Catalogue / Flyer</option>
          <option >Formation</option>
          <option > Réseaux informatique</option>
          <option > Matériels informatique</option>

        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Taille du projet</Form.Label>
        <Form.Control as="select" name="Taille_projet" onChange={handleInputChange} value={formData.Taille_projet} required>
        <option >5 a 10 pages statiques</option>
          <option >10 a 50 pages statiques </option>
          <option >Un Catalogue sans vente en ligne</option>
          <option >E-commerce web-site</option>
          <option >App Web</option>
          <option >Portail dynamique</option>
          <option >Application de gestion simple</option>
          <option >Application de gestion Complexe</option>
      </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Cahier de charge</Form.Label>
        <Form.Control as="select" name="Cahier_charge" onChange={handleInputChange} value={formData.cahier_charge}required>
          <option >-----</option>
          <option>Deja pret (je l'enverrais par mail)</option>
          <option>En cours de travail</option>
          </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Video</Form.Label>
        <Form.Control as="select" name="video" onChange={handleInputChange} value={formData.video} required>
          <option>Non,j'ai pas besoin des videos </option>
          <option>Oui,je dispose des videos</option>
          <option>A vous de realiser  mes videos </option>
        </Form.Control>
      </Form.Group>


      <Form.Group>
        <Form.Label>Prise Photo</Form.Label>
        <Form.Control as="select" name="Prise_photo" onChange={handleInputChange} value={formData.Prise_photo} required>
          <option>Non,j'ai pas besoin </option>
          <option>A vous de realiser des prises photo </option>
        </Form.Control>
      </Form.Group>


      <Form.Group >
        <Form.Label>impression:</Form.Label>
        <Form.Control as="select" name="impression" onChange={handleInputChange} value={formData.Impression} required>
          <option>Non,j'ai pas besoin des impressions</option>
          <option>Oui ,tu peux ajouter</option>
        </Form.Control>
      </Form.Group>


      <Form.Group>
        <Form.Label>Civilité</Form.Label>
        <Form.Control as="select" name="civilite" onChange={handleInputChange} value={formData.Civilité} required>
        <option>-----</option>
        <option>Mr</option>
        <option>Mme</option>
        <option>Mlle</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Nom Complet</Form.Label>
        <Form.Control type='text' name='Nom_complet' onChange={handleInputChange} value={formData.Nom_complet} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Raison sociale</Form.Label>
        <Form.Control type='text' name='Raison_sociale' onChange={handleInputChange} value={formData.Raison_sociale} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Type de structure</Form.Label>
        <Form.Control as="select" name='Secteur_activite' onChange={handleInputChange} value={formData.Secteur_activite} required>
          <option>-----</option>
          <option>Entreprise</option>
          <option>Société</option>
          <option>Association</option>
          <option>Particulier</option>
          <option>Non,j'ai pas besoin</option>

        </Form.Control>

      </Form.Group>
      
      <Form.Group>
        <Form.Label>Secteur d'activité</Form.Label>
        <Form.Control type='text' name='Secteur_activite' onChange={handleInputChange} value={formData.Secteur_activite} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Téléphone fixe</Form.Label>
        <Form.Control type='number' name='Telephone_fixe' onChange={handleInputChange} value={formData.Telephone_fixe} required />
      </Form.Group>
     

      <Form.Group>
        <Form.Label>Téléphone mobile</Form.Label>
        <Form.Control type='number' name='Telephone_mobile' onChange={handleInputChange} value={formData.Telephone_mobile} required />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' name='Email' onChange={handleInputChange} value={formData.Email} required/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Ville</Form.Label>
        <Form.Control type='text' name='ville' onChange={handleInputChange} value={formData.ville} required />

      </Form.Group>

    <Form.Group>
      <Form.Label>Pays</Form.Label>
      <Form.Control type='text' name='pays' onChange={handleInputChange} value={formData.pays} required />

    </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Description générale de votre projet:</Form.Label>
        <Form.Control as="textArea" rows={3} name="description" onChange={handleInputChange} value={formData.Description} placeholder="Votre activité, public cible... etc"  className='textForm'/>
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginTop:'10px'}}>Submit</Button>
    </Form>
    </>
  );
}

export default FormService;
