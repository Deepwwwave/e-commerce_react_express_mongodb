import React from "react";

export default function Panier() {

    const [nbreProduct, setNbreProduct] = useState(1);

    const nbreProductplus = () => {
      setNbreProduct(nbreProduct+1);
    };
  
    const nbreProductmoins = () => {
      setNbreProduct(nbreProduct-1);
    };
    
  return (
    <div>
      <div className="container-pannier">
        <h2>Mon Panier</h2>
        <hr />
        <div className="container-pannier-detail-product">
          <img src="/mohair.jpeg" alt="pull" />
          <div className="description-pannier-detail-product">
            <h3>20€</h3>
            <p>
              description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Laborum dolore facere cupiditate beatae sequi autem.
              Veritatis inventore accusantium nam beatae, dolor harum dolores
              exercitationem libero sapiente in aut quia qui.
            </p>
            <div className="container-nbre-product">
              <btn className="nbre-product-moins" onClick={nbreProductmoins}>
                <b>-</b>
              </btn>
              <input className="nbre-product"value={nbreProduct} size="1" disabled/>
              <btn className="nbre-product-plus" onClick={nbreProductplus}>
                <b>+</b>
              </btn>
            </div>
          </div>
        </div>
      </div>
      <div className="conainer-paiement"></div>
        <h3>TOTAL</h3>
        <hr/>
        <h4>Produits        20€</h4>  
        <h4>Livraison         8€</h4> 
        <h4>Total             28€</h4>
        <div className="btn-checkout">PAIEMENT</div>
    </div>
  );
}
