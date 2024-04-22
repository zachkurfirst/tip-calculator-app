import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from './assets/logo.svg'

const App = () => {
  return (
    <>
      <main className="flex flex-col items-center gap-4 h-dvh border-2 border-black">
        <img src={logo} alt="Splitter logo" className="mt-12" />
        <div className="flex gap-8 max-w-screen-md bg-white p-6 rounded-3xl shadow-md">
          <BillForm />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
