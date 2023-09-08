import "./App.css";
import { ThreadsList } from "./component/threads";
import New from "./component/createThread";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <header>
          <p>掲示板</p>
          <a href="/thread/new">新しいスレッドを立てる</a>
        </header>

        <Routes>
          <Route path="/" element={<ThreadsList></ThreadsList>}></Route>
          <Route path="//thread/new" element={<New></New>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
