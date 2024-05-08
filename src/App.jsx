import { useEffect, useState } from "react";
import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from "./assets/logo.svg";

const App = () => {
  const [billAmt, setBillAmt] = useState("");
  const [showBillAmtError, setShowBillAmtError] = useState(false);

  const [tip, setTip] = useState("");
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [isCustomTip, setIsCustomTip] = useState(false);

  const [people, setPeople] = useState("");
  const [showPeopleError, setShowPeopleError] = useState(false);

  // Display Totals
  const [tipPP, setTipPP] = useState(0);
  const [totalPP, setTotalPP] = useState(0);

  const handleResetBtn = () => {
    setBillAmt("");
    setTip("");
    setPeople("");
  };

  // run useEffect when any of the 3 form values update
  useEffect(() => {
    console.table({ billAmt, tip, people });
    // if entries exist for billAmt and people
    if (billAmt > 0 && people > 0) {
      setTipPP((billAmt * (tip / 100)) / people);
      setTotalPP(billAmt / people + tipPP);
      console.log({ tipPP, totalPP });
    } else if (billAmt == 0 || people == 0) {
      setTipPP(0);
      setTotalPP(0);
      console.log('reset display totals')
    }
  }, [billAmt, people, tip, tipPP, totalPP]);

  return (
    <>
      <main className="mb-10 flex flex-grow flex-col items-center gap-12">
        <img src={logo} alt="Splitter logo" className="mt-12" />
        <div
          id="white-container"
          className="flex max-w-full flex-wrap justify-center gap-8 rounded-3xl bg-white p-8 shadow-md sm:mx-8 sm:max-w-screen-md sm:justify-evenly sm:gap-4 sm:p-6"
        >
          <BillForm
            billAmt={billAmt}
            setBillAmt={setBillAmt}
            showBillAmtError={showBillAmtError}
            setShowBillAmtError={setShowBillAmtError}
            tip={tip}
            setTip={setTip}
            isTipSelected={isTipSelected}
            setIsTipSelected={setIsTipSelected}
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
