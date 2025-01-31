import { Button, Grid, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addTransaction,
  clearTransactions,
} from "../store/modules/counterSlice";
import { useState } from "react";

export function Home() {
  const financialState = useAppSelector((state) => state.financial);
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"income" | "expense">("income");
  const [error, setError] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
    } else {
      setAmount(0);
    }
  };

  const handleRegister = () => {
    if (!description || amount <= 0) {
      setError("Please fill in all fields correctly!");
      return;
    }

    dispatch(
      addTransaction({
        type: type,
        description: description,
        value: amount,
      })
    );

    setDescription("");
    setAmount(0);
    setError("");
  };

  const handleClearHistory = () => {
    dispatch(clearTransactions()); 
  };

  const calculateBalance = () => {
    let balance = 0;

    financialState.transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        balance += transaction.value;
      } else {
        balance -= transaction.value;
      }
    });
    return balance;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <Grid container spacing={2} sx={{ textAlign: "center", padding: 3 }}>

      <Grid item xs={12}>
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Transaction Register
        </Typography>
      </Grid>


      <Grid item xs={12}>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
      </Grid>

 
      <Grid item xs={12}>
        <TextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={handleAmountChange}
          sx={{ marginBottom: 2 }}
          fullWidth
        />
      </Grid>


      <Grid item xs={12} sx={{ marginBottom: 2 }}>
        <Button
          variant={type === "income" ? "contained" : "outlined"}
          color="success"
          onClick={() => setType("income")}
          sx={{ marginRight: 2 }}
        >
          Income
        </Button>

        <Button
          variant={type === "expense" ? "contained" : "outlined"}
          color="error"
          onClick={() => setType("expense")}
        >
          Expense
        </Button>
      </Grid>

 
      {error && (
        <Grid item xs={12}>
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        </Grid>
      )}


      <Grid item xs={12} sx={{ marginBottom: 3 }}>
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </Grid>

 
      <Grid item xs={12} sx={{ marginBottom: 3 }}>
        <Button variant="outlined" color="warning" onClick={handleClearHistory}>
          Clear History
        </Button>
      </Grid>

    
      <Grid item xs={12} sx={{ marginBottom: 3 }}>
        <Typography variant="h4">
          Balance: {formatCurrency(calculateBalance())}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Transactions
        </Typography>

        {financialState.transactions.length > 0 ? (
          financialState.transactions.map((transaction, index) => {
            const transactionType =
              transaction.type === "income" ? "Income:" : "Expense:";
            return (
              <Typography key={index} sx={{ marginBottom: 1 }}>
                {transactionType} {formatCurrency(transaction.value)} |
                Description: {transaction.description}
              </Typography>
            );
          })
        ) : (
          <Typography>No transactions registered.</Typography>
        )}
      </Grid>
    </Grid>
  );
}
