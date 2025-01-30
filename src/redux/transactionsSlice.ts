import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  id: number;
  type: "income" | "expense";
  description: string;
  amount: number;
}

interface TransactionsState {
  transactions: Transaction[];
  balance: number;
}

const initialState: TransactionsState = {
  transactions: [],
  balance: 0,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Omit<Transaction, "id">>) => {
      const { type, description, amount } = action.payload;
      const transaction = { id: Date.now(), type, description, amount };
      state.transactions.push(transaction);
      state.balance += type === "income" ? amount : -amount;
    },
    deleteTransaction: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const transaction = state.transactions.find((t) => t.id === id);
      if (transaction) {
        state.balance -=
          transaction.type === "income"
            ? transaction.amount
            : -transaction.amount;
        state.transactions = state.transactions.filter((t) => t.id !== id);
      }
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
