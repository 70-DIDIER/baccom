
export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8f76ab91-622c-4c6d-87c8-a3a7421d93cc");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    return (
        <>  
    <div className="container-fluid py-6 px-5" id="contact">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 text-uppercase mb-4">
        Contacter <span className="text-primary">Nous</span> Pour plus Info
      </h1>
    </div> 
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-lg-7">
                <div className="contact-form bg-light p-5">
                    <div className="row g-3" onSubmit={onSubmit}>
                        <div className="col-12 col-sm-6">
                            <input
                               name="name"
                                type="text"
                                className="form-control border-0"
                                placeholder="Your Name"
                                style={{ height: 55 }}

                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                name="email"
                                type="email"
                                className="form-control border-0"
                                placeholder="Your Email"
                                style={{ height: 55 }}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                name="subject"
                                type="text"
                                className="form-control border-0"
                                placeholder="Subject"
                                style={{ height: 55 }}
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                name="message"
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