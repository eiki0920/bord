import "./App.css";
import { ThreadsList } from "./component/threads";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <p>掲示板</p>
          <a href="/">スレッドを作成</a>
        </header>

        <div className="main">
          <h2>新着スレッド</h2>
          <div className="ViewThreads">
            <ThreadsList></ThreadsList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
