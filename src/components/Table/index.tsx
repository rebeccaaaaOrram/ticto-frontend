import styles from "./styles.module.scss";

export function TableContent() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.trHead}>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.trBody}>
            <td className={styles.pl_16}>Desenvolvimento de website</td>
            <td className={styles.deposit}>R$ 12.000</td>
            <td>Venda</td>
            <td>13/04/2021</td>
            <td>
              <img src="/assets/delete.png" alt="Excluir transação" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
