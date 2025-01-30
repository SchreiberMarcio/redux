export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense"; // Entrada ou saída
}

export type TransactionState = {
  transactions: Transaction[];
};
