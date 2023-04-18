"use client";
import { createContext, useEffect, useState } from "react";

interface GlobalContextData {
  transactions: any;
  addTransaction: (newTransaction: any) => void;
  removeTransaction: (id: any) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  title: string;
  amount: string;
  type: string;
  category: string;
  handleNameChange: (event: any) => void;
  handleamountChange: (event: any) => void;
  handleTypeChange: (event: any) => void;
  handleCategoryChange: (event: any) => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

// create a context for share data between components
export const GlobalContext = createContext({} as GlobalContextData);

// create a provider for share data between components
export function GlobalProvider({ children }: GlobalProviderProps) {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Desenvolvimento de website",
      type: "deposit",
      category: "Venda",
      amount: 12000,
      date: "13/04/2021",
    },
    {
      id: 2,
      title: "Hamburgueria Pizzy",
      type: "withdraw",
      category: "Alimentação",
      amount: 59,
      date: "10/04/2021",
    },
  ]);

  function addTransaction(newTransaction: any) {
    setTransactions([...transactions, newTransaction]);
    // save in local storage
    localStorage.setItem(
      "u",
      JSON.stringify([...transactions, newTransaction])
    );
  }

  function removeTransaction(id: any) {
    setTransactions(
      transactions.filter((transaction: { id: any }) => transaction.id !== id)
    );
  }

  // modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // inset new transaction

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleamountChange = (event: any) => {
    setAmount(event.target.value);
  };

  const handleTypeChange = (event: any) => {
    setType(event.target.innerText.trim());
  };

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const transaction = {
      title,
      amount,
      type,
      category,
      date: new Date().toLocaleDateString("pt-BR"),
    };
    addTransaction(transaction);
    handleCloseModal();
  };

  useEffect(() => {
    console.log("provider useEffect");
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        showModal,
        setShowModal,
        handleOpenModal,
        handleCloseModal,
        title,
        amount,
        type,
        category,
        handleNameChange,
        handleamountChange,
        handleTypeChange,
        handleCategoryChange,
        handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
