import Header from "./components/Header"
import Main from "./components/Main"
import TestingGrounds from "./components/TestingGrounds";

function App() {

  return (
    <div className="parent">
        <div className="child">
          <Header />
          <Main />
         
        </div>
       <TestingGrounds />
    </div>
  );
}

export default App;
