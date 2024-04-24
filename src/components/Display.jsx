const Display = () => {
  return (
    <div id="display" className="flex flex-col justify-between rounded-xl bg-very-dark-cyan p-8 w-1/2">
      <div id="display-results" className="flex flex-col gap-8 mt-4">
        <div id="display-row" className="flex justify-between items-center">
          <div id="display-labels" className="">
            <p className="text-white text-sm">Tip Amount</p>
            <p className="text-grayish-cyan text-xs">/ person</p>
          </div>
          <p className="text-strong-cyan text-4xl">$0.00</p>
        </div>
        <div id="display-row" className="flex justify-between items-center">
          <div id="display-labels" className="">
            <p className="text-white text-sm">Total</p>
            <p className="text-grayish-cyan text-xs">/ person</p>
          </div>
          <p className="text-strong-cyan text-4xl">$0.00</p>
        </div>
      </div>
      <button className="bg-strong-cyan text-very-dark-cyan uppercase rounded-md py-2 enabled:hover:bg-light-grayish-cyan text-lg transition-all disabled:opacity-20">Reset</button>
    </div>
  );
};
export default Display;
