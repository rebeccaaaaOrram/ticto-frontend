import { Cards } from "../Cards";
import styles from "./styles.module.scss";

export function Summary() {
  return (
    <div className={styles.container}>
      <Cards
        icon={<img src="/assets/entradas.png" alt="Entrada" />}
        title="Entradas"
        value={15000}
      />
      <Cards
        icon={<img src="/assets/saida.png" alt="Saida" />}
        title="Saidas"
        value={15000}
      />
      <Cards title="Saldo Total" value={15000} />
    </div>
  );
}
