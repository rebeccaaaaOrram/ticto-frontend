"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import Close from "../../../public/assets/close.svg";
import Income from "../../../public/assets/ENTRADA.svg";
import Outcome from "../../../public/assets/SAIDA.svg";
import styles from "./styles.module.scss";

export function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image src={Logo} alt="Logo" />
          <button className={styles.button} onClick={handleOpenModal}>
            NOVA TRANSAÇÃO
          </button>
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button className={styles.close} onClick={handleCloseModal}>
                  <Image src={Close} alt="Close" />
                </button>
                <h1 className={styles.contentTitle}> Cadatro transação</h1>
                <form className={styles.form}>
                  <input type="text" placeholder="Nome" value="" />
                  <input type="number" placeholder="Preço" value="0" />
                  <div className={styles.type}>
                    <button type="button" className="">
                      <Image src={Income} alt="income" />
                      <span> Entrada </span>
                    </button>
                    <button type="button" className="">
                      <Image src={Outcome} alt="income" />
                      <span> Saída </span>
                    </button>
                  </div>
                  <input type="text" placeholder="Categoria" value="" />

                  <button type="submit" className={styles.buttonRegister}>
                    Cadastrar
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
