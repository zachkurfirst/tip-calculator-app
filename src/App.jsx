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
  const [isCustomTip, setIsCustomTip] = useState(false);

  const [people, setPeople] = useState("");
  const [showPeopleError, setShowPeopleError] = useState(false);

  const [tipAmt, setTipAmt] = useState(0);
  // TODO: function for calculateTotal
  const [totalAmt, setTotalAmt] = useState(0);

  // TODO: move function to either billForm
  const calculateTip = () => {
    setTipAmt(billAmt / people) * tip;
  };

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
            isTipSelected={isTipSelected}
            setIsTipSelected={setIsTipSelected}
            tip={tip}
            setTip={setTip}
            isCustomTip={isCustomTip}
            setIsCustomTip={setIsCustomTip}
            people={people}
            setPeople={setPeople}
            showPeopleError={showPeopleError}
            setShowPeopleError={setShowPeopleError}
          />
          <Display tipAmt={tipAmt} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
