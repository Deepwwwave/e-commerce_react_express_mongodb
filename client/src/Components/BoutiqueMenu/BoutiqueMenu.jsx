import styles from "./boutiqueMenu.module.css";
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
    <ul className={styles.boutiqueMenu}>
      <li className={styles.item} onClick={afficheToutLesArticles}>
        Tout les articles
      </li>
      <li className={styles.item} onClick={afficheBonnet}>
        Bonnet
      </li>
      <li className={styles.item} onClick={afficheTourDeCou}>
        Tour de cou
      </li>
      <li className={styles.item} onClick={affichePull}>
        Pull
      </li>
      <li className={styles.item} onClick={afficheGant}>
        Gant
      </li>
      <li className={styles.item} onClick={afficheChaussette}>
        Chaussette
      </li>
      <li className={styles.item} onClick={afficheChausson}>
        Chausson
      </li>
      <li className={styles.item} onClick={affichePlaide}>
        Plaide
      </li>
      <li className={styles.item} onClick={affichePelote}>
        Pelote
      </li>
    </ul>
  );
}
