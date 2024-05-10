// import icons
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const BillForm = ({
  bill,
  setBill,
  showBillError,
  setShowBillError,
  // isTipSelected, // ?: maybe use this state to unselect tip if click again or remove
  // setIsTipSelected,
  tip,
  setTip,
  isCustomTip,
  setIsCustomTip,
  people,
  setPeople,
  showPeopleError,
  setShowPeopleError,
}) => {
  // Event handler for bill input field
  const handleBillInput = (e) => {
    const input = e.target.value;
    // console.log(input);
    // regex to prevent input of more than 2 decimal places
    const regex = /^(\d*\.{0,1}\d{0,2}$)/;
    // .test() method: compare regex with input and return boolean
    if (regex.test(input)) {
      if (input > 0) {
        setBill(+input);
      } else {
        setBill(input);
      }
      setShowBillError(false);
    } else {
      setShowBillError(true);
    }
  };

  // Prevent input of certain characters
  const blockInvalidBillChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  // Event handler for tip selection
  const handleSelectedTip = (e) => {
    console.log(e.target.value);
    setTip(+e.target.value);
    // console.log('tip:', tip)
    setIsCustomTip(false);
    // setIsTipSelected(true);
  };

  const handleCustomTip = (e) => {
    const input = e.target.value;
    // account for empty string and delete input
    if (input === "") {
      setTip("");
      setIsCustomTip(false);
      // setIsTipSelected(false);
    } else {
      if (
        input === "5" ||
        input === "10" ||
        input === "15" ||
        input === "25" ||
        input === "50"
      ) {
        console.log("This tip value exists!");
        setIsCustomTip(true);
        // setIsTipSelected(true);
        setTip(+e.target.value);
      } else {
        setIsCustomTip(true);
        // setIsTipSelected(false);
        setTip(+e.target.value);
      }
    }
  };

  // Prevent input of certain characters
  const blockInvalidTipChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  // Event handler for people input field
  const handlePeopleInput = (e) => {
    const input = e.target.value;
    console.log(input);
    // account for empty string and delete input
    if (input === "") {
      setPeople("");
      setShowPeopleError(false);
    } else {
      const input = +e.target.value;
      if (input === 0) {
        setPeople(input);
        setShowPeopleError(true);
      } else {
        setPeople(input);
        setShowPeopleError(false);
      }
    }
  };

  const blockInvalidPeopleChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  return (
    <div
      id="bill-form"
      className="select-highlight flex w-full flex-col gap-8 sm:w-[48%]"
    >
      <div id="bill-section">
        <div id="bill-label" className="flex justify-between text-sm">
          <label htmlFor="bill" className=" text-dark-grayish-cyan">
            Bill
          </label>
          <p id="error" className="text-red-400">
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
            name="bill"
            id="bill"
            min="0"
            step=".01"
            placeholder="0"
            className={`w-full rounded-sm bg-very-light-grayish-cyan py-1 pr-4 text-right text-xl text-very-dark-cyan placeholder:text-grayish-cyan focus:outline-none focus:ring-2 ${showBillError ? "ring-2 ring-red-400 focus:ring-red-400" : "focus:ring-strong-cyan"}`}
            value={bill}
            onChange={handleBillInput}
            onKeyDown={blockInvalidBillChar}
          />
        </div>
      </div>
      <div id="tip-section">
        <label htmlFor="tip1" className="text-sm text-dark-grayish-cyan">
          Select Tip %
        </label>
        <div
          id="tip-choices"
          className="mt-2 grid grid-cols-2 gap-3 text-center text-lg text-very-light-grayish-cyan sm:grid-cols-3"
        >
          <label
            htmlFor="tip1"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip1"
              name="tip"
              value="5"
              checked={tip === 5}
              onChange={handleSelectedTip}
              className="hidden"
            />
            5%
          </label>
          <label
            htmlFor="tip2"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip2"
              name="tip"
              value="10"
              checked={tip === 10}
              onChange={handleSelectedTip}
              className="hidden"
            />
            10%
          </label>
          <label
            htmlFor="tip3"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip3"
              name="tip"
              value="15"
              checked={tip === 15}
              onChange={handleSelectedTip}
              className="hidden"
            />
            15%
          </label>
          <label
            htmlFor="tip4"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip4"
              name="tip"
              value="25"
              checked={tip === 25}
              onChange={handleSelectedTip}
              className="hidden"
            />
            25%
          </label>
          <label
            htmlFor="tip5"
            className="has-[:checked]:select-highlight-reverse cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip5"
              name="tip"
              value="50"
              checked={tip === 50}
              onChange={handleSelectedTip}
              className="hidden"
            />
            50%
          </label>
          <label htmlFor="custom-tip">
            <input
              type="number"
              id="custom-tip"
              name="tip"
              min="0"
              placeholder="Custom"
              value={isCustomTip ? tip : ""}
              onChange={handleCustomTip}
              onKeyDown={blockInvalidTipChar}
              className="w-full rounded-md bg-very-light-grayish-cyan px-4 py-1 text-right text-very-dark-cyan placeholder:text-center placeholder:text-grayish-cyan focus:outline-none focus:ring-2 focus:ring-strong-cyan sm:placeholder:text-sm md:placeholder:text-lg"
            />
          </label>
        </div>
      </div>
      <div id="people-section">
        <div id="people-label" className="flex justify-between text-sm">
          <label htmlFor="people" className="text-dark-grayish-cyan">
            Number of People
          </label>
          <p id="error" className="text-red-400">
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
            name="people"
            id="people"
            placeholder="0"
            min="1"
            className={`w-full rounded-sm bg-very-light-grayish-cyan py-1 pr-4 text-right text-xl text-very-dark-cyan placeholder:text-grayish-cyan focus:outline-none focus:ring-2 ${showPeopleError ? "ring-2 ring-red-400 focus:ring-red-400" : "focus:ring-strong-cyan"}`}
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
