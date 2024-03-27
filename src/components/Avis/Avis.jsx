import './Avis.scss';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Avis_2 from './../../assets/img/Avis_2.jpg';
import Avis_4 from './../../assets/img/Avis_4.jpg';
import Avis_5 from './../../assets/img/Avis_5.jpg';
import Avis_6 from './../../assets/img/Avis_6.jpg';
import star from './../../assets/img/star.svg'
import stars from './../../assets/img/stars.svg'

export default function Avis() {

    return (
            <div className='Section_Avis'>
            <h3 className='text-center pt-5 pb-5 text-white'>Avis</h3>
            <div className="container pb-5">
            <div className="desktop-view">
            <div className="Avis row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_5} className="card-img-top" alt="Avis 1"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={stars} alt="note" />
                                </div>
                                <span className="card-text">Service de réservation impeccable.Le site internet est juste incroyable et super simple à utiliser. J’ai pu louer le box de mes rêves !</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_2} className="card-img-top" alt="Avis 2"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={star} alt="note" />
                                </div>
                                <span className="card-text">Horrible, le propriétaire m’a volé mes meubles pour les revendre.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_6} className="card-img-top" alt="Avis 3"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={stars} alt="note" />
                                </div>
                                <span className="card-text">J’aime trop mon box. Je passe tous les jours pour voir comment mes enfants vont.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_4} className="card-img-top" alt="Avis 4"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={star} alt="note" />
                                </div>
                                <span className="card-text">Mon box a explosé. Les pompiers ne sont pas intervenu !!!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-view">
                <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                loopFillGroupWithBlank={true}
                >
                <SwiperSlide>
                <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_5} className="card-img-top" alt="Avis 1"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={stars} alt="note" />
                                </div>
                                <span className="card-text">Service de réservation impeccable.Le site internet est juste incroyable et super simple à utiliser. J’ai pu louer le box de mes rêves !</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_2} className="card-img-top" alt="Avis 2"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={star} alt="note" />
                                </div>
                                <span className="card-text">Horrible, le propriétaire m’a volé mes meubles pour les revendre.</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_6} className="card-img-top" alt="Avis 3"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={stars} alt="note" />
                                </div>
                                <span className="card-text">J’aime trop mon box. Je passe tous les jours pour voir comment mes enfants vont.</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="col-md-6 col-lg-3">
                        <div className="card mt-3 mb-3">
                            <img src={Avis_4} className="card-img-top" alt="Avis 4"/>
                            <div className="card-body">
                                <div className="rating text-center mt-2 mb-2">
                                    <img src={star} alt="note" />
                                </div>
                                <span className="card-text">Mon box a explosé.</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
            </div>
            </div>
    );

}
