const Display = () => {
  return (
    <div id="display" className="rounded-lg bg-very-dark-cyan p-4">
      <div id="results">
        <div id="results-row" className="flex">
          <div>
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <p>$0.00</p>
        </div>
        <div id="results-row" className="flex">
          <div>
            <p>Total</p>
            <p>/ person</p>
          </div>
          <p>$0.00</p>
        </div>
      </div>
      <button>Reset Button</button>
    </div>
  );
};
export default Display;
