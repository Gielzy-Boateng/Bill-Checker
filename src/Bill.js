const Bill = ({ bill, setBill }) => {
  return (
    <div>
      How much was the bill?
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        placeholder="Bill Value"
      />
    </div>
  );
};

export default Bill;
