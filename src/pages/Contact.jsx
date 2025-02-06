/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';

export default function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage('Envoi en cours...');

        const formData = new FormData(event.target);
        formData.append("access_key", "037da8cd-bb46-4ea4-9cda-9f010763be16");

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
            setMessage('Message envoyé avec succès !');
            formRef.current.reset(); // Réinitialiser le formulaire
        } else {
            setMessage('Erreur lors de l\'envoi du message.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="container-fluid py-6 px-5" id="contact">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
                <h1 className="display-5 text-uppercase mb-4">
                    Contactez <span className="text-primary">Nous</span> Pour plus d`Info
                </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-lg-7">
                    <div className="contact-form bg-light p-5">
                        <form ref={formRef} onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Your Name"
                                        style={{ height: 55 }}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control border-0"
                                        placeholder="Your Email"
                                        style={{ height: 55 }}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        name="subject"
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Subject"
                                        style={{ height: 55 }}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        className="form-control border-0"
                                        rows={4}
                                        placeholder="Message"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Envoi en cours...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </form>
                        {message && <div className="mt-3 text-center">{message}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}