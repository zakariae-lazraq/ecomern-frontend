import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import FooterPage from '../components/FooterPage';

function NosSolution() {
    const textWithNewLine= `Simple et efficace, DEVOstock \n vous propose de gérer les devis\n, les stocks, les achats,les ventes \n,l'inventaire,les journaux DEVOstock \n s’adapte à de nombreuses activités \n grâce à sa richesse fonctionnelle \n et la souplesse de son paramétrage.`
  return (
    <div >
    {/* <h1 className='solTitle'>Nos Solutions</h1> */}
    <div class="nine">
        <h1>Devo System<span>Best Service</span></h1>
    </div>
    <CardGroup>
      <Card>
        <a href="https://www.devosystem.com/DEVO-Commerce.html">
        <Card.Img variant="top" src="https://www.devosystem.com/upload/commerce.png"  style={{width:"250px",marginLeft:'5%'}}/>
        </a>
        <Card.Body>
          <Card.Title>DEVOstock</Card.Title>
          <Card.Text >
          <div className="text-container solutionText" >
            <p>
            Simple et efficace, DEVOstock vous propose de gérer les devis, les stocks, les achats,les ventes,l'inventaire,les journaux... DEVOstock s’adapte à de nombreuses activités grâce à sa richesse fonctionnelle et la souplesse de son paramétrage.

 
            </p>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h5 className="text-muted SolFooterCart">A Partir de 150 <img src="https://cdn-icons-png.flaticon.com/512/2150/2150062.png" width='30px' /></h5>
        </Card.Footer>
      </Card>
      <Card>
        <a href="https://www.devosystem.com/DEVO-Caisse.html">
        <Card.Img variant="top" src="https://www.devosystem.com/upload/caisse.png"  style={{width:"250px",marginLeft:'5%'}}/>
        </a>
        <Card.Body>
          <Card.Title>DEVO Caisse</Card.Title>
          <Card.Text >
          <div className="text-container solutionText" >
            <p>
            DEVOCaisse vous propose de gérer l’encaissement, les stocks, les achats,les ventes... DEVOCaisse 
            s’adapte à de nombreuses activités grâce à sa richesse fonctionnelle et la souplesse de son paramétrage.
            </p>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h5 className="text-muted SolFooterCart">A Partir de 210 <img src="https://cdn-icons-png.flaticon.com/512/2150/2150062.png" width='30px' /></h5>
        </Card.Footer>
      </Card>
      <Card>
        <a href="https://www.devosystem.com/DEVO-Ecole.html">
        <Card.Img variant="top" src="https://www.devosystem.com/upload/ecole.png"  style={{width:"250px",marginLeft:'5%'}}/>
        </a>
        <Card.Body>
          <Card.Title>DEVO Ecole</Card.Title>
          <Card.Text >
          <div className="text-container solutionText" >
          DEVOécole est un logiciel de gestion des écoles scolaires privés compatible avec "MASSAR" qui s'adapte aux règlements de Etablissement.
         Assurez le suivi des élèves, les impayés, la caisse, des statistiques, des fiches élèves,l'historique et plus encore.
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h5 className="text-muted SolFooterCart">A Partir de 350 <img src="https://cdn-icons-png.flaticon.com/512/2150/2150062.png" width='30px' /></h5>
        </Card.Footer>
      </Card>
    
      
    </CardGroup>

<CardGroup>
<Card>
    <a href="https://www.devosystem.com/DEVO-paye.html">
        <Card.Img variant="top" src="https://www.devosystem.com/upload/paye.png"  style={{width:"250px",marginLeft:'5%'}}/>
        </a>
        <Card.Body>
          <Card.Title>DEVO Paye</Card.Title>
          <Card.Text >
          <div className="text-container solutionText" >
          La première fonction d'un logiciel de paye est la saisie, le calcul et l'édition du bulletin de paye.Outre ces fonctions liées
          à la production du bulletin de salaire, il devient également un outil performant d'aide à la décision dans la gestion des ressources humaines.

            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
          <h5 className="text-muted  SolFooterCart">A Partir de 550 <img src="https://cdn-icons-png.flaticon.com/512/2150/2150062.png" width='30px' /></h5>
        
        </Card.Footer>
</Card>
<Card>
    <a href="https://www.devosystem.com/DEVO-document.html">
  <Card.Img variant="top" src="https://www.devosystem.com/upload/document.png"  style={{width:"250px",marginLeft:'5%'}}/>
   </a>
  <Card.Body>
    <Card.Title>DEVO Document</Card.Title>
    <Card.Text >
    <div className="text-container solutionText" >
    DEVOdocuments est un logiciel créé pour organiser tous les documents Le fait qu'il soit simple à manipuler le rend accessible même
    aux utilisateurs novices
      </div>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <h5 className="text-muted SolFooterCart">A Partir de 349 <img src="https://cdn-icons-png.flaticon.com/512/2150/2150062.png" width='30px' /></h5>
  </Card.Footer>
</Card>
<Card>
    <a href="https://www.devosystem.com/DEVO-etat.html">
  <Card.Img variant="top" src="https://www.devosystem.com/upload/etat.png"  style={{width:"250px",marginLeft:'5%'}}/>
   </a>
  <Card.Body>
    <Card.Title>DEVO Etat Civile</Card.Title>
    <Card.Text >
    <div className="text-container solutionText" >
    C'est très simple, DEVOetatcivil répond pleinement aux besoins quotidiens d'un service d'état civil, mais il dispose également
    des évolutions technologiques, ce qui en fait un outil de gestion très performant et souple d'utilisation.


      </div>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <h5 className="text-muted SolFooterCart">A Partir de 710 <img src="https://cdn-icons-png.flaticon.com/512/2150/2150062.png" width='30px' /></h5>
  </Card.Footer>
</Card>



</CardGroup>
    <br /> <br />
<FooterPage/>
</div>
  );
}

export default NosSolution;