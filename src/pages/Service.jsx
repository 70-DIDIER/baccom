import image1 from '../images/service-1.jpg';
import image2 from '../images/service-2.jpg';
import image3 from '../images/service-3.jpg';
import image4 from '../images/service-4.jpg';
import image5 from '../images/service-5.jpg';
import image6 from '../images/service-6.jpg';

export default function Service(){
    return (
        <>
  {/* Services Start */}
  <div className="container-fluid bg-light py-6 px-5" id='service'>
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 text-uppercase mb-4">
        Nos <span className="text-primary">divers</span> Services
      </h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src={image1} alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-building text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Etude de terrain</h4>
            <p>
            Analyse et évaluation des terrains pour assurer la viabilité de votre projet.
            </p>
            <a className="btn text-primary" href="">
              Read More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src={image2} alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-home text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Location et vente des terrains et maisons</h4>
            <p>
            Trouvez et acquérez facilement des terrains et maisons adaptés à vos besoins.
            </p>
            <a className="btn text-primary" href="">
              Read More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src={image3} alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-drafting-compass text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Conceptions des plans</h4>
            <p>
            Création de plans architecturaux optimisés pour vos projets de construction.
            </p>
            <a className="btn text-primary" href="">
              Read More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src={image4} alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-palette text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Formation et divers</h4>
            <p>
            Programmes de formation pour renforcer vos compétences en bâtiment et construction.
            </p>
            <a className="btn text-primary" href="">
              Read More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src={image5} alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-tools text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Execution &amp; suivi du projet </h4>
            <p>
            Gestion complète de votre projet, de la conception à la réalisation finale.
            </p>
            <a className="btn text-primary" href="">
              Read More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
          <img className="img-fluid" src={image6} alt="" />
          <div className="service-icon bg-white">
            <i className="fa fa-3x fa-paint-brush text-primary" />
          </div>
          <div className="px-4 pb-4">
            <h4 className="text-uppercase mb-3">Desin batiment</h4>
            <p>
            Conception architecturale moderne et adaptée à vos besoins.
            </p>
            <a className="btn text-primary" href="">
              Read More <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
</>

    )
}