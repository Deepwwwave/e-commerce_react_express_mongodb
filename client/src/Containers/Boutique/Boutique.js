import './Boutique.css'
import BoutiqueMenu from '../../Components/BoutiqueMenu/BoutiqueMenu'
import PanierLogo from '../../Components/Panier/PanierLogo'

export default function Boutique() {
    return (
        <div>
            <PanierLogo/>
            <BoutiqueMenu/>
        </div>
    )
}
