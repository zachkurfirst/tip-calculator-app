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
        <div className="mx-8 flex max-w-full flex-wrap justify-center gap-4 rounded-3xl bg-white p-8 shadow-md sm:max-w-screen-md sm:gap-12">
          <BillForm />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
