"use client";
import { createContext, useEffect, useState } from "react";

interface GlobalContextData {
  transactions: any;
  addTransaction: (newTransaction: any) => void;
  removeTransaction: (id: any) => void;
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
  }

  function removeTransaction(id: any) {
    setTransactions(
      transactions.filter((transaction: { id: any }) => transaction.id !== id)
    );
  }

  useEffect(() => {
    console.log("provider useEffect");
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
