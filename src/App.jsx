import { useState } from "react";
import { ExchangeLayout } from "./components/layout/ExchangeLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ExchangeLayout></ExchangeLayout>
    </div>
  );
}

export default App;
