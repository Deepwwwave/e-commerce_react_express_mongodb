import "./BoutiqueMenu.css";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchBonnet, fetchTourDeCou, fetchPull, fetchGant, fetchChaussette, fetchChausson, fetchPlaide, fetchPelote } from "../../redux/products/productsReducer";

export default function BoutiqueMenu() {
  const dispatch = useDispatch();

  const afficheToutLesArticles = () => {
    dispatch(fetchProducts());
  };

  const afficheBonnet = () => {
    dispatch(fetchBonnet());
  };

  const afficheTourDeCou = () => {
    dispatch(fetchTourDeCou());
  };

  const affichePull = () => {
    dispatch(fetchPull());
  };

  const afficheGant = () => {
    dispatch(fetchGant());
  };

  const afficheChaussette = () => {
    dispatch(fetchChaussette());
  };

  const afficheChausson = () => {
    dispatch(fetchChausson());
  };

  const affichePlaide = () => {
    dispatch(fetchPlaide());
  };

  const affichePelote = () => {
    dispatch(fetchPelote());
  };

  return (
    <div className="container-boutique-menu">
      <div className="item" onClick={afficheToutLesArticles}>
        Tout les articles
      </div>
      <div className="item" onClick={afficheBonnet}>
        Bonnet
      </div>
      <div className="item" onClick={afficheTourDeCou}>
        Tour de cou
      </div>
      <div className="item" onClick={affichePull}>
        Pull
      </div>
      <div className="item" onClick={afficheGant}>
        Gant
      </div>
      <div className="item" onClick={afficheChaussette}>
        Chaussette
      </div>
      <div className="item" onClick={afficheChausson}>
        Chausson
      </div>
      <div className="item" onClick={affichePlaide}>
        Plaide
      </div>
      <div className="item" onClick={affichePelote}>
        Pelote
      </div>
    </div>
  );
}
