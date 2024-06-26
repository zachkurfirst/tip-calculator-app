// import icons
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const BillForm = ({
  bill,
  setBill,
  showBillError,
  setShowBillError,
  tip,
  setTip,
  isCustomTip,
  setIsCustomTip,
  people,
  setPeople,
  showPeopleError,
  setShowPeopleError,
}) => {
  // Event handler for bill input
  const handleBillInput = (e) => {
    const input = e.target.value;
    // regex to prevent input of more than 2 decimal places
    const regex = /^(\d*\.{0,1}\d{0,2}$)/;
    // .test() method: compare regex with input and return boolean
    if (regex.test(input)) {
      // account for empty string and delete input
      if (input === "") {
        setBill(input);
      } else {
        setBill(+input);
      }
      setShowBillError(false);
    } else {
      setShowBillError(true);
    }
  };

  // Prevent input of certain characters in bill input
  const blockInvalidBillChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  // Event handler for tip click
  const handleTipClick = (e) => {
    // if tip is selected, unselect
    if (+e.target.value === tip) {
      setTip("");
      e.target.parentElement.classList.remove("hover:bg-light-grayish-cyan");
      e.target.parentElement.classList.remove("hover:text-very-dark-cyan");
    }
  };

  // Event handler for new tip selection
  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
    setIsCustomTip(false);
  };

  // Event handler for custom tip
  const handleCustomTip = (e) => {
    const input = e.target.value;
    // account for empty string and delete input
    if (input === "") {
      setTip(input);
      setIsCustomTip(false);
    } else {
      setIsCustomTip(true);
      setTip(+input);
    }
  };

  // Prevent input of certain characters in custom tip input
  const blockInvalidTipChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  // Event handler for people input
  const handlePeopleInput = (e) => {
    const input = e.target.value;
    // account for empty string and delete input
    if (input === "") {
      setPeople(input);
      setShowPeopleError(false);
    } else {
      setPeople(input);
      if (input == 0) {
        setShowPeopleError(true);
      } else {
        setShowPeopleError(false);
      }
    }
  };

  // Prevent input of certain characters in people input
  const blockInvalidPeopleChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  return (
    <div
      id="bill-form"
      className="select-highlight flex w-full flex-col gap-8 sm:w-[48%]"
    >
      <div id="bill-section">
        <div id="bill-label" className="flex justify-between text-sm md:text-lg">
          <label htmlFor="bill" className="text-dark-grayish-cyan">
            Bill
          </label>
          <p id="bill-error" className="text-red-400">
            {showBillError && "Only 2 decimal places"}
          </p>
        </div>
        <div
          id="bill-container"
          className="relative mt-1 flex items-center shadow-sm"
        >
          <img
            src={dollarIcon}
            aria-hidden="true"
            className="pointer-events-none absolute left-4"
          />
          <input
            type="number"
            inputMode="decimal"
            name="bill"
            id="bill"
            min="0"
            step=".01"
            placeholder="0"
            className={`w-full rounded-sm bg-very-light-grayish-cyan py-1 pr-4 text-right text-xl sm:text-2xl text-very-dark-cyan placeholder:text-grayish-cyan focus:outline-none focus:ring-2 ${showBillError ? "ring-2 ring-red-400 focus:ring-red-400" : "focus:ring-strong-cyan"}`}
            value={bill}
            onChange={handleBillInput}
            onKeyDown={blockInvalidBillChar}
          />
        </div>
      </div>
      <div id="tip-section">
        <label htmlFor="tip1" className="text-sm md:text-lg text-dark-grayish-cyan">
          Select Tip %
        </label>
        <div
          id="tip-choices"
          className="mt-2 grid grid-cols-2 gap-3 text-center text-xl md:text-2xl text-very-light-grayish-cyan sm:grid-cols-3"
        >
          <label
            htmlFor="tip1"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-2 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip1"
              name="tip"
              value="5"
              checked={tip === 5}
              onClick={handleTipClick}
              onChange={handleSelectedTip}
              className="hidden"
            />
            5%
          </label>
          <label
            htmlFor="tip2"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-2 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip2"
              name="tip"
              value="10"
              checked={tip === 10}
              onClick={handleTipClick}
              onChange={handleSelectedTip}
              className="hidden"
            />
            10%
          </label>
          <label
            htmlFor="tip3"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-2 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip3"
              name="tip"
              value="15"
              checked={tip === 15}
              onClick={handleTipClick}
              onChange={handleSelectedTip}
              className="hidden"
            />
            15%
          </label>
          <label
            htmlFor="tip4"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-2 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip4"
              name="tip"
              value="25"
              checked={tip === 25}
              onClick={handleTipClick}
              onChange={handleSelectedTip}
              className="hidden"
            />
            25%
          </label>
          <label
            htmlFor="tip5"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-2 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip5"
              name="tip"
              value="50"
              checked={tip === 50}
              onClick={handleTipClick}
              onChange={handleSelectedTip}
              className="hidden"
            />
            50%
          </label>
          <label htmlFor="custom-tip">
            <input
              type="number"
              inputMode="decimal"
              id="custom-tip"
              name="tip"
              min="0"
              placeholder="Custom"
              value={isCustomTip ? tip : ""}
              onChange={handleCustomTip}
              onKeyDown={blockInvalidTipChar}
              className="w-full rounded-md bg-very-light-grayish-cyan px-4 py-2 text-right text-very-dark-cyan placeholder:text-center placeholder:text-grayish-cyan focus:outline-none focus:ring-2 focus:ring-strong-cyan placeholder:text-xl sm:placeholder:text-sm md:placeholder:text-lg lg:placeholder:text-2xl"
            />
          </label>
        </div>
      </div>
      <div id="people-section">
        <div id="people-label" className="flex justify-between text-sm md:text-lg">
          <label htmlFor="people" className="text-dark-grayish-cyan">
            Number of People
          </label>
          <p id="people-error" className="text-red-400">
            {showPeopleError && "Can't be zero"}
          </p>
        </div>
        <div
          id="people-container"
          className="relative mt-1 flex items-center shadow-sm"
        >
          <img
            src={personIcon}
            aria-hidden="true"
            className="pointer-events-none absolute left-4"
          />
          <input
            type="number"
            inputMode="numeric"
            name="people"
            id="people"
            placeholder="0"
            min="1"
            className={`w-full rounded-sm bg-very-light-grayish-cyan py-1 pr-4 text-right text-xl sm:text-2xl text-very-dark-cyan placeholder:text-grayish-cyan focus:outline-none focus:ring-2 ${showPeopleError ? "ring-2 ring-red-400 focus:ring-red-400" : "focus:ring-strong-cyan"}`}
            value={people}
            onChange={handlePeopleInput}
            onKeyDown={blockInvalidPeopleChar}
          />
        </div>
      </div>
    </div>
  );
};

export default BillForm;
