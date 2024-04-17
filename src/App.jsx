import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="uppercase tracking-widest text-dark-grayish-cyan">
          Spli
          <br />
          tter
        </h1>
        <div className="flex max-w-screen-md">
          <BillForm />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
