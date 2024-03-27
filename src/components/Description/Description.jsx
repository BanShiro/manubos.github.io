import './description.scss'
import Desciption_Bonhomme from '../../assets/Img/Description_Bonhomme.svg'

export default function Description() {
    return (
        <>
                <div className="Description d-flex text-primary">
                    <div className="Description__Image col-3 d-flex justify-content-end">
                        <img src={Desciption_Bonhomme} alt="Le porteur de meuble" />
                    </div>
                    <div className="Description__Element col-8 d-flex text-end flex-column">
                            <h4 className='Description__Element__1'>Qui sommes nous ?</h4>
                            <h4 className='Description__Element__2'>Bienvenue sur <span>BOX WITH YOU</span></h4>
                            <span className='Description__Element__3 d-flex text-end flex-column'>Votre Solution de Stockage de Meubles de Confiance</span>
                            <span className='Description__Element__4 d-flex text-end flex-column'>
                                BOX WITH YOU est votre partenaire de confiance pour la location de box de stockage sécurisé,
                                conçu spécialement pour ranger vos meubles de manière pratique, accessible et économique.
                                Que vous ayez besoin de libérer de l'espace à la maison, de stocker temporairement vos meubles lors d'un déménagement ou de garantir la sécurité de vos biens précieux, BOX WITH YOU est la solution idéale.
                            </span>
                            <div className='Description__Element__5 background-primary d-flex text-end flex-column' />
                            <span className='Description__Element__6 d-flex text-end flex-column'>
                                Nous mettons à votre disposition 4 tailles de box de stockage pour répondre à vos besoins spécifiques.
                                Que vous ayez quelques meubles à ranger ou une maison entière à stocker, nous avons la solution parfaite pour vous. Nos boxes sont sécurisés, propres et faciles d'accès.
                            </span>
                    </div>
                </div>
    </>
    )
}
