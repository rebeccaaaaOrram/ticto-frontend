"use client";
import { useGlobal } from "@/src/hooks/useGlobal";
import { Cards } from "../Cards";
import styles from "./styles.module.scss";

export function Summary() {
  const { totalIncome, totalOutcome, total } = useGlobal();
  return (
    <div className={styles.container}>
      <Cards
        icon={<img src="/assets/entradas.png" alt="Entrada" />}
        title="Entradas"
        value={totalIncome}
      />
      <Cards
        icon={<img src="/assets/saida.png" alt="Saida" />}
        title="Saidas"
        value={totalOutcome}
      />
      <Cards title="Saldo Total" value={total} />
    </div>
  );
}
