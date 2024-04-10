import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
