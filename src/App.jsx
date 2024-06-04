import { useEffect, useState } from "react";
import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from "./assets/logo.svg";

const App = () => {
  const [bill, setBill] = useState("");
  const [showBillError, setShowBillError] = useState(false);

  const [tip, setTip] = useState("");
  const [isCustomTip, setIsCustomTip] = useState(false);

  const [people, setPeople] = useState("");
  const [showPeopleError, setShowPeopleError] = useState(false);

  // Display Totals
  const [tipPP, setTipPP] = useState(0);
  const [totalPP, setTotalPP] = useState(0);

  const handleResetBtn = () => {
    setBill("");
    setTip("");
    setPeople("");
  };

  // useEffect to update display totals
  useEffect(() => {
    // update if entries exist for bill and people
    if (bill > 0 && people > 0) {
      setTipPP((bill * (tip / 100)) / people);
      setTotalPP(bill / people + tipPP);
    } else if (bill == 0 || people == 0) {
      // reset display totals
      setTipPP(0);
      setTotalPP(0);
    }
    console.table({ bill, tip, people, tipPP, totalPP });
  }, [bill, people, tip, tipPP, totalPP]);

  return (
    <>
      <main className="flex flex-grow flex-col items-center justify-center">
        <h1>
          <img
            src={logo}
            alt="Splitter logo"
            className="my-10 selection:bg-strong-cyan sm:mt-0"
          />
        </h1>
        <div
          id="white-container"
          className="mb-4 flex flex-wrap justify-center gap-8 rounded-3xl bg-white p-8 shadow-md sm:mx-4 max-w-prose sm:justify-evenly sm:gap-4 lg:gap-8"
        >
          <BillForm
            bill={bill}
            setBill={setBill}
            showBillError={showBillError}
            setShowBillError={setShowBillError}
            tip={tip}
            setTip={setTip}
            isCustomTip={isCustomTip}
            setIsCustomTip={setIsCustomTip}
            people={people}
            setPeople={setPeople}
            showPeopleError={showPeopleError}
            setShowPeopleError={setShowPeopleError}
          />
          <Display
            tipPP={tipPP}
            totalPP={totalPP}
            handleResetBtn={handleResetBtn}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
