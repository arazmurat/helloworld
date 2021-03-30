import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App" htmlFor="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello World!!!</h1>
     

        {/*<Blog></Blog>*/}
        <Blog />
      </header>
    </div>
  );
}

export default App;
