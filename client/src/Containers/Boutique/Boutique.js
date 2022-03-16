import './Boutique.css'
import BoutiqueMenu from '../../Components/BoutiqueMenu/BoutiqueMenu'
import PanierLogo from '../../Components/PanierLogo/PanierLogo'
import GallerieProduits from '../../Components/GallerieProduits/GallerieProduits'

export default function Boutique() {

    return (
        <div>
            <PanierLogo/>
            <BoutiqueMenu/>
            <GallerieProduits/>
        </div>
    )
}
