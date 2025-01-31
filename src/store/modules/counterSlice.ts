import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  type: "income" | "expense";
  description: string;
  value: number;
}

interface FinancialState {
  transactions: Transaction[];
}

const initialState: FinancialState = {
  transactions: [],
};

const financialSlice = createSlice({
  name: "financial",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    clearTransactions: (state) => {
      state.transactions = []; 
    },
  },
});

export const { addTransaction, clearTransactions } = financialSlice.actions;
export default financialSlice.reducer;
