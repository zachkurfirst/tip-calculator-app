// import icons
import dollarIcon from "../assets/icon-dollar.svg";
import personIcon from "../assets/icon-person.svg";

const BillForm = () => {
  return (
    <div id="bill-form" className="flex w-full flex-col gap-8 sm:w-[48%]">
      <div id="bill">
        <label htmlFor="bill" className="text-sm text-dark-grayish-cyan">
          Bill
        </label>
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
            placeholder="0"
            className="w-full rounded-sm bg-very-light-grayish-cyan py-1 pr-4 text-right text-xl text-very-dark-cyan placeholder:text-grayish-cyan invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-strong-cyan"
          />
        </div>
      </div>
      <div id="tip" className="">
        <label htmlFor="tip" className="text-sm text-dark-grayish-cyan">
          Select Tip %
        </label>
        <div
          id="tip-choices"
          className="mt-2 grid grid-cols-2 gap-3 text-center text-lg text-very-light-grayish-cyan sm:grid-cols-3"
        >
          <label
            htmlFor="tip5"
            className="cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip5"
              name="tip"
              value="5"
              className="hidden"
            />
            5%
          </label>
          <label
            htmlFor="tip10"
            className="cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip10"
              name="tip"
              value="10"
              className="hidden"
            />
            10%
          </label>
          <label
            htmlFor="tip15"
            className="cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip15"
              name="tip"
              value="15"
              className="hidden"
            />
            15%
          </label>
          <label
            htmlFor="tip25"
            className="cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip25"
              name="tip"
              value="25"
              className="hidden"
            />
            25%
          </label>
          <label
            htmlFor="tip50"
            className="cursor-pointer rounded-md bg-very-dark-cyan py-1 hover:bg-light-grayish-cyan hover:text-very-dark-cyan has-[:checked]:bg-strong-cyan has-[:checked]:text-very-dark-cyan"
          >
            <input
              type="radio"
              id="tip50"
              name="tip"
              value="50"
              className="hidden"
            />
            50%
          </label>
          <input
            type="number"
            name="tip"
            id="tip"
            min="0"
            placeholder="Custom"
            className="rounded-md bg-very-light-grayish-cyan px-4 py-1 text-right text-very-dark-cyan placeholder:text-center placeholder:text-grayish-cyan focus:outline-none focus:ring-2 focus:ring-strong-cyan sm:placeholder:text-sm md:placeholder:text-lg"
          />
        </div>
      </div>
      <div id="people" className="">
        <div id="people-label" className="flex justify-between text-sm">
          <label htmlFor="people" className="text-dark-grayish-cyan">
            Number of People
          </label>
          <p id="error" className="text-red-400"></p>
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
            name=""
            id=""
            placeholder="0"
            min="1"
            max="14"
            className="w-full rounded-sm bg-very-light-grayish-cyan py-1 pr-4 text-right text-xl text-very-dark-cyan placeholder:text-grayish-cyan invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-strong-cyan"
          />
        </div>
      </div>
    </div>
  );
};
export default BillForm;
