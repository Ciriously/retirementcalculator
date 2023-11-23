import Calculator from "./features/calculator/Calculator";
import "./App.css";
import Banner from "./Banner";
import FAQs from "./components/FAQs";

function App() {
  return (
    <div>
      <Banner />
      <Calculator />
      <FAQs />
    </div>
  );
}

export default App;
