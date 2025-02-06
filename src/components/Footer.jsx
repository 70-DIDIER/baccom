export default function Footer(){
    return(
        <>
  {/* Footer Start */}
  <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
    <div className="row g-5">
      <div className="col-lg-6 pe-lg-5">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 display-4 text-uppercase text-white">
            <i className="bi bi-building text-primary me-2" />
            BACCOM BTP TOGO
          </h1>
        </a>
        <p>
        Bureau d`Architecture de Conception pour la Construction Moderne 


        </p>
        <p>
          <i className="fa fa-map-marker-alt me-2 text-secondary" />
          Kégué, Lomé-TOGO
        </p>
        <p>
          <i className="fa fa-phone-alt me-2 text-secondary" />
          +228 90 42 37 22 /  97 70 71 26
        </p>
        <p>
          <i className="fa fa-envelope me-2 text-secondary" />
          baccombtp@gmail.com
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
            href="#"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
            href="#"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
            href="#"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-lg btn-primary btn-lg-square rounded-0"
            href="#"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-6 ps-lg-5">
        <div className="row g-5">
          <div className="col-sm-6">
            <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2 text-secondary" />
                Home
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2 text-secondary" />
                About Us
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2 text-secondary" />
                Our Services
              </a>
              
            </div>
          </div>
          <div className="col-sm-6">
            <h4 className="text-white text-uppercase mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2 text-secondary" />
                Home
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2 text-secondary" />
                About Us
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right me-2 text-secondary" />
                Our Services
              </a>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
    <div className="d-flex flex-column flex-md-row justify-content-between">
      <div className="py-4 px-5 text-center text-md-start">
        <p className="mb-0">
          ©{" "}
          <a className="text-primary" href="#">
            BACCOM BTP TOGO
          </a>
          .Tous droits reservées
        </p>
      </div>
      <div className="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
        <p className="mb-0">
          Designed by{" "}
          <a className="text-dark" href="https://www.linkedin.com/in/koffi-didier-guinwogbegno">
            Didier GUIN
          </a>
        </p>
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

  )
}