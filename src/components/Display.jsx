const Display = ({ tipPP, totalPP, handleResetBtn }) => {
  // convert display amounts to USD currency
  const USD = (amt) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);

    // if billAmt = 0 or people = 0, reset display PP totals
    

  return (
    <div
      id="display"
      className="flex w-full flex-col justify-between gap-10 rounded-xl bg-very-dark-cyan p-6 sm:w-[48%] sm:p-8"
    >
      <div id="display-results" className="mt-4 flex flex-col gap-8">
        <div id="display-row" className="flex items-center justify-between">
          <div id="display-labels" className="">
            <p className="text-sm text-white">Tip Amount</p>
            <p className="text-xs text-grayish-cyan">/ person</p>
          </div>
          <p className="text-4xl text-strong-cyan">{USD(tipPP)}</p>
        </div>
        <div id="display-row" className="flex items-center justify-between">
          <div id="display-labels" className="">
            <p className="text-sm text-white">Total</p>
            <p className="text-xs text-grayish-cyan">/ person</p>
          </div>
          <p className="text-4xl text-strong-cyan">
            {USD(totalPP)}
          </p>
        </div>
      </div>
      <button
        onClick={handleResetBtn}
        className="rounded-md bg-strong-cyan py-2 text-lg uppercase text-very-dark-cyan transition-all enabled:hover:bg-light-grayish-cyan disabled:opacity-20"
        disabled={totalPP ? false : true}
      >
        Reset
      </button>
    </div>
  );
};
export default Display;
