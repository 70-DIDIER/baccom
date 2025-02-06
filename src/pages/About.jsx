import about from "../images/about.jpg";
export default function About(){
    return(
        <>
  {/* About Start */}
  <div className="container-fluid py-6 px-5" id="about">
    <div className="row g-5">
      <div className="col-lg-7">
        <h1 className="display-5 text-uppercase mb-4">
         <span className="text-primary">BACCOM</span>  BTP TOGO
        </h1>
        <h4 className="text-uppercase mb-3 text-body">
          Bureau d`architecture  de conception pour la construction moderne
        </h4>
        <p style={{fontWeight:'bold'}}>
          Nous intervenons dans les domaines suivantes:
        </p>
        <div className="row gx-5 py-2">
          <div className="col-sm-6 mb-2">
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Etude de terrain
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Conception des plans architecturaux modernes
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Réalisation du devis
            </p>
          </div>
          <div className="col-sm-6 mb-2">
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Exécution et suivi du projet
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Location, et ventes des terrains et maisons
            </p>
            <p className="fw-bold mb-2">
              <i className="fa fa-check text-primary me-3" />
              Formation et conseil
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-5 pb-5" style={{ minHeight: 400 }}>
        <div className="position-relative bg-dark-radial h-100 ms-5">
          <img
            className="position-absolute w-100 h-100 mt-5 ms-n5"
            src={about}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
</>

    )
}