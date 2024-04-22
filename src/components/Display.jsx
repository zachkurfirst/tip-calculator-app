const Display = () => {
  return (
    <div id="display" className="flex flex-col justify-between rounded-xl bg-very-dark-cyan w-1/2 p-6">
      <div id="results">
        <div id="results-row" className="flex">
          <div>
            <p className="text-white">Tip Amount</p>
            <p className="text-light-grayish-cyan">/ person</p>
          </div>
          <p className="text-strong-cyan">$0.00</p>
        </div>
        <div id="results-row" className="flex">
          <div>
            <p className="text-white">Total</p>
            <p className="text-light-grayish-cyan">/ person</p>
          </div>
          <p className="text-strong-cyan">$0.00</p>
        </div>
      </div>
      <button className="bg-strong-cyan text-very-dark-cyan uppercase rounded-md w-full py-1 hover:bg-dark-grayish-cyan">Reset</button>
    </div>
  );
};
export default Display;
