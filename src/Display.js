const Display = ({ bill, tip }) => {
  const open = false;
  return (
    <div className="display">
      {bill > 0 && (
        <p>
          You pay ${bill + tip} (${bill}+ ${tip} tip)
        </p>
      )}
    </div>
  );
};

export default Display;
