import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <h1 className="text-dark-grayish-cyan uppercase tracking-widest">
        Spli
        <br />
        tter
      </h1>
      <BillForm />
      <Display />
      <Footer />
    </>
  );
};

export default App;
