import Eduguard from "./components/Eduguard";
import Header from "./components/Header";
import Instructors from "./components/Instructors";
import Main from "./components/Main";
import Successfull from "./components/Successfull";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Eduguard/>
      <Successfull/>
      <Instructors/>
    </div>
  );
}

export default App;
