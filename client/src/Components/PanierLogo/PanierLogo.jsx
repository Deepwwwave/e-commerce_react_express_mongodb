import styles from "./panierLogo.module.css";

export default function PanierLogo() {
  return (
    <div className={styles.containerPanierIncr} title="Voir Pannier">
      <div>
        <img src="/min_cart.png" alt="Voir pannier"/>
      </div>
      <div className={styles.panierIncr}>0</div>
    </div>
  );
}
