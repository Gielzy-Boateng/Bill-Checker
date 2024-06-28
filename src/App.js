// import Counter from "./Counter";
// import Header from "./Header";
// import "./index.css";
import "./Style.css";
import Bill from "./Bill";
import Discount from "./Discount";
import { useState } from "react";
import Display from "./Display";
import Reset from "./Reset";

function App() {
  const [bill, setBill] = useState("");
  const [discount1, setDiscount1] = useState("");
  const [discount2, setDiscount2] = useState("");
  const tip = bill * ((discount1 + discount2) / 2 / 100);

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Discount
        bill={bill}
        discount1={discount1}
        setDiscount1={setDiscount1}
        discount2={discount2}
        setDiscount2={setDiscount2}
      />
      <Display tip={tip} bill={bill} />
      <Reset
        bill={bill}
        setBill={setBill}
        setDiscount1={setDiscount1}
        setDiscount2={setDiscount2}
      />
      {/* <Header/>
      <Counter/> */}
    </div>
  );
}

export default App;
