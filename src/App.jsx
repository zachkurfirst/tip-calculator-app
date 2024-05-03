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
  const [selectedTip, setSelectedTip] = useState(0);
  const [tipAmt, setTipAmt] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);

  const [people, setPeople] = useState("");
  const [showPeopleError, setShowPeopleError] = useState(false);

  // Event handler for bill input field
  const handleBillAmtInput = (e) => {
    const input = e.target.value;
    // console.log(input);
    const regex = /^(\d*\.{0,1}\d{0,2}$)/;
    // .test() method: compare regex for no more than 2 decimal places with input
    if (regex.test(input)) {
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
    setSelectedTip(e.target.value);
    // console.log('selectedTip:', selectedTip)
    setIsTipSelected(true);
  };
  
  const calculateTip = () => {
    setTipAmt(billAmt / people) * selectedTip;
  };

  // Event handler for bill input field
  const handlePeopleInput = (e) => {
    const input = e.target.value;
    console.log(input);
    const regex = /^$|^(?:[1-9]|1[0-4])$/;
    // .test() method: compare regex for empty string or int 1-14 with input
    if (regex.test(input)) {
      setPeople(input);
      setShowPeopleError(false);
      calculateTip();
      console.log("billAmt:", billAmt)
      console.log("people:", people)
      console.log("selectedTip:", selectedTip)
      console.log("tipAmt:", tipAmt)
    } else {
      setShowPeopleError(true);
    }
  };


  const blockInvalidPeopleChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  return (
    <>
      <main className="flex flex-col items-center gap-12 mb-10">
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
            selectedTip={selectedTip}
            handleSelectedTip={handleSelectedTip}
            people={people}
            handlePeopleInput={handlePeopleInput}
            blockInvalidPeopleChar={blockInvalidPeopleChar}
            showPeopleError={showPeopleError}
            tipAmt={tipAmt}
          />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
