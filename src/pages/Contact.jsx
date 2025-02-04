
export default function Contact() {
    return (
        <>  
        <div className="container-fluid py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 text-uppercase mb-4">
        Contacter <span className="text-primary">Nous</span> Pour plus d'Info
      </h1>
    </div> 
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-lg-7">
                <div className="contact-form bg-light p-5">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Your Name"
                                style={{ height: 55 }}
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="email"
                                className="form-control border-0"
                                placeholder="Your Email"
                                style={{ height: 55 }}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Subject"
                                style={{ height: 55 }}
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                className="form-control border-0"
                                rows={4}
                                placeholder="Message"
                                defaultValue={""}
                            />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}