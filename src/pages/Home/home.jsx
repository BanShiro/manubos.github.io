import './home.scss'
import './../../constants/_typography.scss'
import './../../constants/_variable.scss'

import Header from './../../components/Header/header'
import Footer from './../../components/Footer/footer'
import Description from '../../components/Description/description'
import Filigramme from '../../components/Filigramme/filigramme'
// import Input from '../../components/Input/input'
import Formulaire from '../../components/Formulaire'
import Avis from '../../components/Avis'


export default function Home() {
    return (
        <>
        <Header />
        <Description />
        <Filigramme />
        <Formulaire />
        <Avis />
        <Footer />
        </>
    )
}
