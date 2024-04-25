import "./App.css";
import BillForm from "./components/BillForm";
import Display from "./components/Display";
import Footer from "./components/Footer";

// import logo
import logo from './assets/logo.svg'

const App = () => {
  return (
    <>
      <main className="flex flex-col items-center gap-12 h-dvh">
        <img src={logo} alt="Splitter logo" className="mt-12" />
        <div className="flex gap-12 justify-center max-w-full sm:max-w-screen-md bg-white p-8 rounded-3xl shadow-md mx-8">
          <BillForm />
          <Display />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
