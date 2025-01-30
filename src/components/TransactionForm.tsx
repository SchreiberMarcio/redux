import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/slices/transactionsSlice";
import { Transaction } from "../types/Transaction";

const TransactionForm: React.FC = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"income" | "expense">("income");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: Math.random().toString(),
      description,
      amount,
      type,
    };
    dispatch(addTransaction(newTransaction));
    setDescription("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
      >
        <option value="income">Entrada</option>
        <option value="expense">Saída</option>
      </select>
      <button type="submit">Adicionar Transação</button>
    </form>
  );
};

export default TransactionForm;
