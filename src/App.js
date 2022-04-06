import "./styles.css";
import Counter from "./components/Counter";
import Display from "./components/Display";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <Display mycount={count} />
      <Counter increment={setCount} />
    </div>
  );
}
