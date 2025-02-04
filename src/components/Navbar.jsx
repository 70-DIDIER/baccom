import logo from '../images/logo.png';
export function Navbar(){
    return(
        <>
  {/* Navbar Start */}
  <div className="container-fluid barrenav sticky-top bg-light bg-light-radial shadow-sm px-5 pe-lg-0">
    <nav className="navbar navbar-expand-lg bg-ligth bg-light-radial navbar-light py-3 py-lg-0">
      <a href="index.html" className="navbar-brand">
      <img src={logo} width="100" height="60" alt="Logo" className="me-2" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="#home" className="nav-item nav-link active">
            Home
          </a>
          <a href="#about" className="nav-item nav-link">
            About
          </a>
          <a href="#service" className="nav-item nav-link">
            Service
          </a>
          
          <a href="#contact" className="nav-item nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
</>

    )
}