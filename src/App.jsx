import "./App.css";
import { ThreadsList } from "./component/threads";
import New from "./component/createThread";
import { ThreadComment } from "./component/threadComments";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <header>
          <a href="/">掲示板</a>
          <a href="/thread/new">新しいスレッドを立てる</a>
        </header>

        <Routes>
          <Route path="/" element={<ThreadsList />} />
          <Route path="/thread/new" element={<New />} />
          <Route path="/thread/:thread_id" element={<ThreadComment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
