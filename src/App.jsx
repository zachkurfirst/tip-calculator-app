import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <>
      <main className="flex h-dvh flex-col items-center gap-12">
        <img src={logo} alt="Splitter logo" className="mt-12" />
        <div id="white-container" className="sm:mx-8 flex flex-wrap max-w-full justify-center sm:justify-evenly gap-8 sm:gap-4 rounded-3xl bg-white p-8 sm:p-6 shadow-md sm:max-w-screen-md">
          <BillForm />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
