import { useState } from "react";
import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from "./assets/logo.svg";

const App = () => {
  const [billAmt, setBillAmt] = useState("");
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const handleBillAmtInput = (e) => {
    console.log(e.target.value);
    setBillAmt(e.target.value);
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const handleSelectedTip = (e) => {
    console.log(e.target.value);
  };

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
            blockInvalidChar={blockInvalidChar}
            handleSelectedTip={handleSelectedTip}
          />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
