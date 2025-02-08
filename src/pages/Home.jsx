import image1 from '../images/carousel-1.webp';
import image2 from '../images/carousel-2.webp';

export default function Home() {
    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0" id='home'>
                <div
                    id="header-carousel"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={image1} alt="Image 1" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" 
                                 style={{ background: 'transparent' }} 
                            >
                                <div className="p-3 text-center" style={{ maxWidth: 900, fontWeight: 'bold' }}>
                                <h1 className="display-2 text-uppercase text-secondary mb-md-4">
                                        Votre maison de rêve
                                    </h1>
                                    <p className="text-white" style={{fontSize: '1.5rem'}}>
                                        Construisez votre maison de rêve avec nous.
                                    </p>
                                    <button className='devisbtn'>Demander un devis</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={image2} alt="Image 2" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" 
                                 style={{ background: 'transparent' }} 
                            >
                                <div className="p-3 text-center" style={{ maxWidth: 900, fontWeight: 'bold' }}>
                                <h1 className="display-2 text-uppercase text-secondary mb-md-4">
                                        Votre maison de rêve
                                    </h1>
                                    <p className="text-white" style={{fontSize: '1.5rem'}}>
                                        Construisez votre maison de rêve avec nous.
                                    </p>
                                    <button className='devisbtn'>Demander un devis</button>
                                </div>
                            </div>
                        </div>
                        {/* Ajoutez d'autres items de carrousel ici si nécessaire */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Précedent</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Suivant</span>
                    </button>
                </div>
            </div>
        </>
    );
}