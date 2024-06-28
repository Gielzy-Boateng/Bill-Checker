const Reset = ({ bill, setDiscount1, setDiscount2, setBill }) => {
  function handleReset() {
    setBill("");
    setDiscount1(0);
    setDiscount2(0);
  }
  return <div>{bill > 0 && <button onClick={handleReset}>Reset</button>}</div>;
};

export default Reset;
