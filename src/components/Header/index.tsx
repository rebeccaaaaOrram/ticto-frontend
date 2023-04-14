import Image from "next/image";
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

export function TopHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={Logo} alt="Logo" />
        <button className={styles.button}> NOVA TRANSAÇÃO </button>
      </div>
    </div>
  );
}
