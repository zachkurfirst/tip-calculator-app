const Display = () => {
  return (
    <div id="display" className="flex flex-col justify-between rounded-xl bg-very-dark-cyan w-1/2 p-6">
      <div id="display-results">
        <div id="display-row" className="flex justify-between items-center mb-8">
          <div id="display-labels" className="text-lg">
            <p className="text-white">Tip Amount</p>
            <p className="text-light-grayish-cyan">/ person</p>
          </div>
          <p className="text-strong-cyan text-4xl">$0.00</p>
        </div>
        <div id="display-row" className="flex justify-between items-center">
          <div id="display-labels" className="text-lg">
            <p className="text-white">Total</p>
            <p className="text-light-grayish-cyan">/ person</p>
          </div>
          <p className="text-strong-cyan text-4xl">$0.00</p>
        </div>
      </div>
      <button className="bg-strong-cyan text-very-dark-cyan uppercase rounded-md w-full py-1 hover:bg-light-grayish-cyan text-lg">Reset</button>
    </div>
  );
};
export default Display;
