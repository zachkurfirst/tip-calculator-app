const Display = ({tipAmt}) => {
  return (
    <div
      id="display"
      className="flex w-full sm:w-[48%] flex-col justify-between rounded-xl bg-very-dark-cyan p-6 sm:p-8 gap-10"
    >
      <div id="display-results" className="mt-4 flex flex-col gap-8">
        <div id="display-row" className="flex items-center justify-between">
          <div id="display-labels" className="">
            <p className="text-sm text-white">Tip Amount</p>
            <p className="text-xs text-grayish-cyan">/ person</p>
          </div>
          <p className="text-4xl text-strong-cyan">$0.00</p>
        </div>
        <div id="display-row" className="flex items-center justify-between">
          <div id="display-labels" className="">
            <p className="text-sm text-white">Total</p>
            <p className="text-xs text-grayish-cyan">/ person</p>
          </div>
          <p className="text-4xl text-strong-cyan">$0.00</p>
        </div>
      </div>
      <button className="rounded-md bg-strong-cyan py-2 text-lg uppercase text-very-dark-cyan transition-all enabled:hover:bg-light-grayish-cyan disabled:opacity-20">
        Reset
      </button>
    </div>
  );
};
export default Display;
