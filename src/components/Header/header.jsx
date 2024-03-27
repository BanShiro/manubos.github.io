import './header.scss'
import logo from  './../../assets/img/box_with_you.png'
import storage from './../../assets/img/storage.png'

export default function Header() {
    return (
        <header className="header w-100 d-flex flex-row">
            <div className="header__zonetext w-50 d-flex flex-column justify-content-between gap-5">
                <h1 className="header__zonetext__h1"><span className="header__zonetext__h1__span">BOX</span><span className="header__zonetext__h1__span">WITH YOU</span></h1>
                <span className="header__zonetext__p1"><span className="header__zonetext__p1__span">Un manque d'espace ? Un besoin d'archiver des documents personnel, stocker vos meubles pour un déménage ou par manque de place ou même entreposer les produit de votre entreprise ?</span></span>
                <span className="header__zonetext__p2 p_bold"><span className='header__zonetext__p2__span'>Vous êtes à la bonne porte !</span></span>
                <a href="#Formulaire" type="button" className="header__zonetext__btn btn-primary p_btn p-3 bdr-5">Votre devis</a>
            </div>
            <div className="header__img w-50 d-flex flex-column justify-content-between">
                <div className="header__img__logo d-flex justify-content-end"><img className='img w-5' src={logo} alt={logo}/></div>
                <div className="header__img__storage d-flex justify-content-end"><img className="w-100 img_storage" src={storage} alt={storage}/></div>
            </div>
        </header>
    )
}


