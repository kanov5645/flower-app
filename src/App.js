import "./assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlowerList from "./components/flowers/FlowerList";
function App() {
  return (
    <div>
      <Header />
      <FlowerList />
      <Footer />
    </div>
  );
}

export default App;
