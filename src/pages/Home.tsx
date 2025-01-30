import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import BalanceDisplay from "../components/BalanceDisplay";
export function Home() {
  return (
    <div>
      <h1>Controle de Dinheiro</h1>
      <BalanceDisplay />
      <TransactionForm />
      <TransactionList />
    </div>
  );
}
