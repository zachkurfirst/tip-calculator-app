import { useState } from "react";
import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from "./assets/logo.svg";

const App = () => {
  const [billAmt, setBillAmt] = useState("");
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("");
  const [showPeopleError, setShowPeopleError] = useState(false);

  // Event handler for bill input field
  const handleBillAmtInput = (e) => {
    const input = e.target.value;
    console.log(input);
    // regex for max 2 decimal places
    if (input.match(/^(\d*\.{0,1}\d{0,2}$)/)) {
      setBillAmt(input);
      setShowBillAmtError(false);
    } else {
      setShowBillAmtError(true);
    }
  };

  // Prevent input of certain characters
  const blockInvalidBillChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  // Event handler for tip selection
  const handleSelectedTip = (e) => {
    console.log(e.target.value);
  };

  // Event handler for bill input field
  const handlePeopleInput = (e) => {
    const input = e.target.value;
    console.log(input);
    // regex for empty string or int 1-14
    if (input.match(/^$|^(?:[1-9]|1[0-4])$/)) {
      setPeople(input);
      setShowPeopleError(false);
    } else {
      // setPeople(input);
      setShowPeopleError(true);
    }
  };

  const blockInvalidPeopleChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  return (
    <>
      <main className="flex h-dvh flex-col items-center gap-12">
        <img src={logo} alt="Splitter logo" className="mt-12" />
        <div
          id="white-container"
          className="flex max-w-full flex-wrap justify-center gap-8 rounded-3xl bg-white p-8 shadow-md sm:mx-8 sm:max-w-screen-md sm:justify-evenly sm:gap-4 sm:p-6"
        >
          <BillForm
            billAmt={billAmt}
            handleBillAmtInput={handleBillAmtInput}
            blockInvalidBillChar={blockInvalidBillChar}
            showBillAmtError={showBillAmtError}
            tip={tip}
            handleSelectedTip={handleSelectedTip}
            people={people}
            handlePeopleInput={handlePeopleInput}
            blockInvalidPeopleChar={blockInvalidPeopleChar}
            showPeopleError={showPeopleError}
          />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
