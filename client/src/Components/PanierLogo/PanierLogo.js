import "./PanierLogo.css";

export default function PanierLogo() {
  return (
    <div className="container-pannier-incr" title="Voir Pannier">
      <div>
        <img src="min_cart.png" alt="Voir pannier"/>
      </div>
      <div className="panier-incr">0</div>
    </div>
  );
}
