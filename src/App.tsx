import Calculator from "./features/calculator/Calculator";
import "./App.css";
import RetirementChart from "./features/RetirementChart";
import Banner from "./Banner";

function App() {
  return (
    <>
      <Banner />
      <Calculator />
      {/* Use the proper component name */}
      {/* <RetirementChart /> */}
    </>
  );
}

export default App;
