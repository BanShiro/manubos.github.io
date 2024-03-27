import './filigramme.scss'
import camera from './../../assets/img/camera.png'
import wash from './../../assets/img/wash.png'
import accessibilite from './../../assets/img/accessibilite.png'

export default function filigramme() {
    return (
        <div className="filigramme d-flex justify-content-around btn-primary py-5">
            <div className="filigramme__left d-flex flex-column align-items-center gap-4">
                <img src={camera} alt={camera} className='w-50'/>
                <h6>Sécurité 100%</h6>
            </div>
            <div className="filigramme__middle d-flex align-items-center flex-column gap-4">
                <img src={wash} alt={wash} className='w-50'/>
                <h6>Propreté assurée</h6>
            </div>
            <div className="filigramme__right d-flex  align-items-center flex-column gap-4">
                <img src={accessibilite} alt={accessibilite} className='w-50'/>
                <h6>Accessibilité</h6>
            </div>
        </div>
    )
}
